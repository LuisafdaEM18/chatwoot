require 'rails_helper'

# Caja negra — Juan Pablo Berrío Díaz (RF-11 a RF-15, módulo de productividad)
# CE = clase de equivalencia, VL = valor límite.
RSpec.describe 'Caja negra: productividad [Juan Pablo]', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}" }

  describe 'RF-11 Respuestas predefinidas' do
    let(:path) { "#{base}/canned_responses" }

    it 'CE válida: crea una respuesta predefinida' do
      post path, params: { canned_response: { short_code: 'qa-saludo', content: 'Hola' } }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
    end

    it 'CE inválida: rechaza un código corto repetido' do
      create(:canned_response, account: account, short_code: 'qa-repetido')

      post path, params: { canned_response: { short_code: 'qa-repetido', content: 'Otra' } }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    [{ short_code: '', content: 'Hola' }, { short_code: 'qa-vacio', content: '' }].each do |attrs|
      it "CE inválida: rechaza #{attrs.inspect}" do
        post path, params: { canned_response: attrs }, headers: headers, as: :json

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'RF-12 Macros' do
    let(:path) { "#{base}/macros" }
    let(:actions) { [{ action_name: 'add_label', action_params: ['qa'] }] }

    it 'CE válida: crea una macro global' do
      post path, params: { name: 'Macro QA', visibility: 'global', actions: actions }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
    end

    it 'CE inválida: rechaza una acción que no existe' do
      post path, params: { name: 'Macro QA', visibility: 'global', actions: [{ action_name: 'borrar_todo', action_params: [] }] },
                 headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE de permisos: otro agente no puede ver una macro personal' do
      macro = create(:macro, account: account, visibility: :personal, created_by: admin)

      get "#{path}/#{macro.id}", headers: agent.create_new_auth_token, as: :json

      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'RF-13 Reglas de automatización (retraso de ejecución)' do
    let(:path) { "#{base}/automation_rules" }
    let(:rule_params) do
      {
        name: 'Regla QA', event_name: 'message_created',
        conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: nil }],
        actions: [{ action_name: 'add_label', action_params: ['qa'] }]
      }
    end

    before { account.enable_features!('delayed_automations') }

    { 10 => :success, 43_200 => :success, 9 => :unprocessable_entity, 43_201 => :unprocessable_entity }.each do |minutes, status|
      it "VL: un retraso de #{minutes} minutos responde #{status}" do
        post path, params: rule_params.merge(execution_delay: minutes), headers: headers, as: :json

        expect(response).to have_http_status(status)
      end
    end

    it 'CE inválida: rechaza un retraso no entero' do
      post path, params: rule_params.merge(execution_delay: 10.5), headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'RF-14 Equipos' do
    let(:path) { "#{base}/teams" }

    it 'CE válida: crea el equipo y guarda el nombre en minúsculas' do
      post path, params: { team: { name: 'QA-Soporte' } }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(response.parsed_body['name']).to eq('qa-soporte')
    end

    it 'CE inválida: rechaza un nombre vacío' do
      post path, params: { team: { name: '' } }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE inválida: rechaza un nombre repetido aunque cambien las mayúsculas' do
      create(:team, account: account, name: 'qa-pagos')

      post path, params: { team: { name: 'QA-Pagos' } }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE de permisos: un agente no puede crear equipos' do
      post path, params: { team: { name: 'qa-agente' } }, headers: agent.create_new_auth_token, as: :json

      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe 'RF-15 Reportes' do
    let(:path) { "/api/v2/accounts/#{account.id}/reports/summary" }
    let(:range) { { type: 'account', since: 7.days.ago.to_i.to_s, until: Time.current.to_i.to_s } }

    it 'CE válida: el administrador consulta el resumen del periodo' do
      get path, params: range, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(response.parsed_body).to include('conversations_count')
    end

    it 'CE de permisos: un agente no puede consultar reportes' do
      get path, params: range, headers: agent.create_new_auth_token, as: :json

      expect(response).to have_http_status(:unauthorized)
    end
  end
end
