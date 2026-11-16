require 'rails_helper'

# Regresión — Luisa Fernanda Espinal Montoya (RF-01 a RF-05)
# Verifican que lo que ya funcionaba se conserva después de corregir D-01 (estados), D-02
# (asignaciones) y refactorizar H-01 (toggle_status). Deben pasar antes y después de los cambios.
RSpec.describe '[Regresión] Luisa: conversaciones', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:inbox) { create(:inbox, account: account) }
  let(:conversation) { create(:conversation, account: account, inbox: inbox, status: :open) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}/conversations/#{conversation.display_id}" }

  before do
    create(:inbox_member, user: admin, inbox: inbox)
    create(:inbox_member, user: agent, inbox: inbox)
  end

  describe 'RF-01 Cambio de estado' do
    it 'sin estado sigue alternando de abierta a resuelta y de vuelta a abierta' do
      post "#{base}/toggle_status", headers: headers, as: :json
      expect(conversation.reload.status).to eq('resolved')

      post "#{base}/toggle_status", headers: headers, as: :json
      expect(conversation.reload.status).to eq('open')
    end

    it 'sigue aceptando el estado pendiente' do
      post "#{base}/toggle_status", params: { status: 'pending' }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(conversation.reload.status).to eq('pending')
    end

    it 'sigue posponiendo con fecha de reactivación' do
      until_time = 1.day.from_now.to_i

      post "#{base}/toggle_status", params: { status: 'snoozed', snoozed_until: until_time }, headers: headers, as: :json

      conversation.reload
      expect(conversation.status).to eq('snoozed')
      expect(conversation.snoozed_until.to_i).to eq(until_time)
    end

    it 'un agente con acceso a la bandeja sigue pudiendo resolver' do
      post "#{base}/toggle_status", params: { status: 'resolved' }, headers: agent.create_new_auth_token, as: :json

      expect(conversation.reload.status).to eq('resolved')
    end
  end

  describe 'RF-02 Asignación' do
    let(:path) { "#{base}/assignments" }

    it 'sigue asignando un agente de la cuenta' do
      post path, params: { assignee_id: agent.id }, headers: headers, as: :json

      expect(response.parsed_body['id']).to eq(agent.id)
      expect(conversation.reload.assignee).to eq(agent)
    end

    it 'sigue quitando el agente con assignee_id nulo' do
      conversation.update!(assignee: agent)

      post path, params: { assignee_id: nil }, headers: headers, as: :json

      expect(conversation.reload.assignee).to be_nil
    end

    it 'sigue asignando un bot de la cuenta' do
      bot = create(:agent_bot, account: account)

      post path, params: { assignee_id: bot.id, assignee_type: 'AgentBot' }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(conversation.reload.ai_assignee).to eq(bot)
    end

    it 'sigue asignando y quitando un equipo' do
      team = create(:team, account: account)

      post path, params: { team_id: team.id }, headers: headers, as: :json
      expect(conversation.reload.team).to eq(team)

      post path, params: { team_id: 0 }, headers: headers, as: :json
      expect(conversation.reload.team).to be_nil
    end
  end

  describe 'RF-03 Mensajes y notas' do
    it 'sigue guardando mensajes públicos y notas privadas' do
      post "#{base}/messages", params: { content: 'Respuesta pública' }, headers: headers, as: :json
      post "#{base}/messages", params: { content: 'Nota interna', private: true }, headers: headers, as: :json

      expect(conversation.messages.reload.map { |m| [m.content, m.private] })
        .to include(['Respuesta pública', false], ['Nota interna', true])
    end
  end

  describe 'RF-04 Etiquetas' do
    it 'sigue creando etiquetas y reemplazando las de una conversación' do
      post "/api/v1/accounts/#{account.id}/labels", params: { label: { title: 'qa-regresion' } }, headers: headers, as: :json
      expect(response).to have_http_status(:success)

      post "#{base}/labels", params: { labels: %w[qa-uno qa-dos] }, headers: headers, as: :json
      post "#{base}/labels", params: { labels: %w[qa-dos] }, headers: headers, as: :json

      expect(conversation.reload.label_list).to contain_exactly('qa-dos')
    end
  end

  describe 'RF-05 Búsqueda' do
    it 'sigue encontrando un contacto por su correo' do
      contact = create(:contact, account: account, email: 'regresion.busqueda@chatwoot.test')

      get "/api/v1/accounts/#{account.id}/search/contacts", params: { q: 'regresion.busqueda' }, headers: headers, as: :json

      expect(response.parsed_body.dig('payload', 'contacts').pluck('id')).to include(contact.id)
    end
  end
end
