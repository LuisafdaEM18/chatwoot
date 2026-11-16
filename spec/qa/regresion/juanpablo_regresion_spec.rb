require 'rails_helper'

# Regresión — Juan Pablo Berrío Díaz (RF-11 a RF-15)
# Verifican que lo que ya funcionaba se conserva después de corregir D-08 (team_members sin
# user_ids) y M-01 (mensaje al crear equipos). Deben pasar antes y después de los cambios.
RSpec.describe '[Regresión] Juan Pablo: productividad', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:agent2) { create(:user, account: account, role: :agent) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}" }

  describe 'RF-11 Respuestas predefinidas' do
    it 'sigue creando, editando y buscando respuestas' do
      post "#{base}/canned_responses", params: { canned_response: { short_code: 'regresion-saludo', content: 'Hola' } },
                                       headers: headers, as: :json
      id = response.parsed_body['id']

      patch "#{base}/canned_responses/#{id}", params: { canned_response: { content: 'Hola de nuevo' } }, headers: headers, as: :json
      get "#{base}/canned_responses", params: { search: 'regresion' }, headers: headers, as: :json

      expect(response.parsed_body.first).to include('short_code' => 'regresion-saludo', 'content' => 'Hola de nuevo')
    end
  end

  describe 'RF-12 Macros' do
    it 'sigue ejecutando una macro sobre una conversación' do
      conversation = create(:conversation, account: account)
      macro = create(:macro, account: account, visibility: :global, created_by: admin,
                             actions: [{ 'action_name' => 'add_label', 'action_params' => ['regresion-macro'] }])

      perform_enqueued_jobs do
        post "#{base}/macros/#{macro.id}/execute", params: { conversation_ids: [conversation.display_id] }, headers: headers, as: :json
      end

      expect(response).to have_http_status(:success)
      expect(conversation.reload.label_list).to include('regresion-macro')
    end
  end

  describe 'RF-13 Reglas de automatización' do
    it 'sigue creando una regla sin retraso y permite desactivarla' do
      post "#{base}/automation_rules",
           params: { name: 'Regla de regresión', event_name: 'message_created', active: true,
                     conditions: [{ attribute_key: 'message_type', filter_operator: 'equal_to', values: ['incoming'], query_operator: nil }],
                     actions: [{ action_name: 'add_label', action_params: ['qa'] }] },
           headers: headers, as: :json
      rule_id = response.parsed_body['id']

      patch "#{base}/automation_rules/#{rule_id}", params: { active: false }, headers: headers, as: :json

      expect(AutomationRule.find(rule_id).active).to be(false)
    end
  end

  describe 'RF-14 Equipos y miembros' do
    it 'sigue creando el equipo en minúsculas' do
      post "#{base}/teams", params: { team: { name: 'QA-Regresion' } }, headers: headers, as: :json

      expect(response.parsed_body['name']).to eq('qa-regresion')
    end

    it 'sigue agregando, reemplazando y quitando miembros' do
      team = create(:team, account: account)
      path = "#{base}/teams/#{team.id}/team_members"

      post path, params: { user_ids: [agent.id] }, headers: headers, as: :json
      expect(team.reload.members).to contain_exactly(agent)

      patch path, params: { user_ids: [agent2.id] }, headers: headers, as: :json
      expect(team.reload.members).to contain_exactly(agent2)

      delete path, params: { user_ids: [agent2.id] }, headers: headers, as: :json
      expect(team.reload.members).to be_empty
    end
  end

  describe 'RF-15 Reportes' do
    it 'el administrador sigue consultando el resumen del periodo' do
      get "/api/v2/accounts/#{account.id}/reports/summary",
          params: { type: 'account', since: 7.days.ago.to_i.to_s, until: Time.current.to_i.to_s }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(response.parsed_body).to include('conversations_count')
    end
  end
end
