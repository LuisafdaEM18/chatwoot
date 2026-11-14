require 'rails_helper'

# Caja negra — Luisa Fernanda Espinal Montoya (RF-01 a RF-05, módulo de conversaciones)
# Las pruebas usan solo la API pública: entradas y respuestas, sin mirar la implementación.
# CE = clase de equivalencia, VL = valor límite.
RSpec.describe 'Caja negra: conversaciones [Luisa]', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:inbox) { create(:inbox, account: account) }
  let(:conversation) { create(:conversation, account: account, inbox: inbox, status: :open) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}" }

  before do
    create(:inbox_member, user: admin, inbox: inbox)
    create(:inbox_member, user: agent, inbox: inbox)
  end

  describe 'RF-01 Cambio de estado' do
    let(:path) { "#{base}/conversations/#{conversation.display_id}/toggle_status" }

    %w[resolved pending snoozed open].each do |status|
      it "CE válida: acepta el estado #{status}" do
        post path, params: { status: status }, headers: headers, as: :json

        expect(response).to have_http_status(:success)
        expect(conversation.reload.status).to eq(status)
      end
    end

    it 'CE válida sin estado: alterna de abierta a resuelta' do
      post path, headers: headers, as: :json

      expect(conversation.reload.status).to eq('resolved')
    end

    it 'CE inválida: rechaza un estado que no existe con 422' do
      post path, params: { status: 'cerrada' }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
      expect(conversation.reload.status).to eq('open')
    end
  end

  describe 'RF-02 Asignación' do
    let(:path) { "#{base}/conversations/#{conversation.display_id}/assignments" }

    it 'CE válida: asigna un agente de la bandeja' do
      post path, params: { assignee_id: agent.id }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(conversation.reload.assignee).to eq(agent)
    end

    it 'CE válida: asigna un equipo de la cuenta' do
      team = create(:team, account: account)

      post path, params: { team_id: team.id }, headers: headers, as: :json

      expect(conversation.reload.team).to eq(team)
    end

    it 'CE inválida: no asigna un agente de otra cuenta y conserva el asignado actual' do
      conversation.update!(assignee: agent)
      outsider = create(:user, account: create(:account))

      post path, params: { assignee_id: outsider.id }, headers: headers, as: :json

      expect(conversation.reload.assignee).to eq(agent)
    end
  end

  describe 'RF-03 Mensajes y notas privadas' do
    let(:path) { "#{base}/conversations/#{conversation.display_id}/messages" }

    it 'CE válida: envía un mensaje público' do
      post path, params: { content: 'Hola, ¿en qué te ayudo?' }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(conversation.messages.last.private).to be(false)
    end

    it 'CE válida: envía una nota privada' do
      post path, params: { content: 'Nota interna', private: true }, headers: headers, as: :json

      expect(conversation.messages.last.private).to be(true)
    end

    it 'VL: acepta un mensaje de exactamente 150 000 caracteres' do
      post path, params: { content: 'a' * 150_000 }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
    end

    it 'VL: rechaza un mensaje de 150 001 caracteres' do
      post path, params: { content: 'a' * 150_001 }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE inválida: guarda el HTML como texto, sin interpretarlo' do
      post path, params: { content: '<script>alert(1)</script>' }, headers: headers, as: :json

      expect(conversation.messages.last.content).to eq('<script>alert(1)</script>')
    end
  end

  describe 'RF-04 Etiquetas' do
    let(:path) { "#{base}/labels" }

    %w[qa-soporte qa_soporte soporte2].each do |title|
      it "CE válida: crea la etiqueta #{title}" do
        post path, params: { label: { title: title } }, headers: headers, as: :json

        expect(response).to have_http_status(:success)
      end
    end

    it 'CE válida: guarda el título en minúsculas' do
      post path, params: { label: { title: 'QA-Ventas' } }, headers: headers, as: :json

      expect(response.parsed_body['title']).to eq('qa-ventas')
    end

    ['qa soporte', 'qa!', ''].each do |title|
      it "CE inválida: rechaza el título #{title.inspect}" do
        post path, params: { label: { title: title } }, headers: headers, as: :json

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    it 'CE inválida: rechaza un título repetido' do
      create(:label, account: account, title: 'qa-repetida')

      post path, params: { label: { title: 'QA-Repetida' } }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE válida: aplica etiquetas a una conversación' do
      post "#{base}/conversations/#{conversation.display_id}/labels", params: { labels: %w[qa-a qa-b] }, headers: headers, as: :json

      expect(conversation.reload.label_list).to contain_exactly('qa-a', 'qa-b')
    end
  end

  describe 'RF-05 Búsqueda' do
    let!(:contact) { create(:contact, account: account, name: 'Cliente Buscado', email: 'buscado.qa@chatwoot.test') }

    it 'CE válida: encuentra el contacto por correo' do
      get "#{base}/search/contacts", params: { q: 'buscado.qa' }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(response.parsed_body.dig('payload', 'contacts').pluck('id')).to include(contact.id)
    end

    it 'CE válida: un término sin coincidencias devuelve una lista vacía' do
      get "#{base}/search/contacts", params: { q: 'no-existe-xyz' }, headers: headers, as: :json

      expect(response.parsed_body.dig('payload', 'contacts')).to be_empty
    end

    it 'CE inválida: una cadena de inyección SQL no provoca error' do
      get "#{base}/search", params: { q: "' OR 1=1 --" }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
    end
  end
end
