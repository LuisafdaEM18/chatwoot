require 'rails_helper'

# TDD — Luisa Fernanda Espinal Montoya (RF-01 Cambio de estado y RF-02 Asignación)
#
# D-01: POST toggle_status con un estado que no existe respondía 500 (ArgumentError del enum).
# D-02: asignar un agente de otra cuenta respondía 200 y dejaba la conversación sin asignado.
# H-01: la línea 175 de Conversation#toggle_status es código muerto (ver caja blanca RF-01).
#       Las pruebas de transición protegen el refactor: deben pasar antes y después de quitarla.
#
# Todas siguen AAA. Cada ejemplo crea sus propios datos con FactoryBot y la base se limpia por
# transacción, así que son independientes y repetibles (FIRST).
RSpec.describe 'TDD Luisa: conversaciones', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:inbox) { create(:inbox, account: account) }
  let(:conversation) { create(:conversation, account: account, inbox: inbox) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}/conversations/#{conversation.display_id}" }

  before do
    create(:inbox_member, user: admin, inbox: inbox)
    create(:inbox_member, user: agent, inbox: inbox)
  end

  describe 'D-01 estado inexistente' do
    it 'el modelo marca el estado como inválido en lugar de lanzar ArgumentError' do
      # Arrange
      conversation.status = 'cerrada'

      # Act
      valid = conversation.valid?

      # Assert
      expect(valid).to be(false)
      expect(conversation.errors[:status]).to be_present
    end

    it 'la API responde 422 y la conversación conserva su estado' do
      # Act
      post "#{base}/toggle_status", params: { status: 'cerrada' }, headers: headers, as: :json

      # Assert
      expect(response).to have_http_status(:unprocessable_entity)
      expect(conversation.reload).to be_open
    end
  end

  describe 'D-02 agente de otra cuenta' do
    let(:outsider) { create(:user, account: create(:account)) }

    it 'responde 422 con un mensaje y conserva el asignado actual' do
      # Arrange
      conversation.update!(assignee: agent)

      # Act
      post "#{base}/assignments", params: { assignee_id: outsider.id }, headers: headers, as: :json

      # Assert
      expect(response).to have_http_status(:unprocessable_entity)
      expect(response.parsed_body['error']).to eq(I18n.t('errors.conversations.invalid_assignee'))
      expect(conversation.reload.assignee).to eq(agent)
    end

    it 'no rechaza asignaciones con assignee_type (bots y asistentes Captain), que resuelve el servicio' do
      # Arrange
      allow(Conversations::AssignmentService).to receive(:new).and_call_original

      # Act
      post "#{base}/assignments", params: { assignee_id: 999_999, assignee_type: 'Captain::Assistant' }, headers: headers, as: :json

      # Assert
      expect(response).not_to have_http_status(:unprocessable_entity)
      expect(Conversations::AssignmentService).to have_received(:new)
        .with(hash_including(assignee_id: 999_999, assignee_type: 'Captain::Assistant'))
    end

    it 'sigue permitiendo quitar el asignado con assignee_id vacío' do
      # Arrange
      conversation.update!(assignee: agent)

      # Act
      post "#{base}/assignments", params: { assignee_id: nil }, headers: headers, as: :json

      # Assert
      expect(response).to have_http_status(:success)
      expect(conversation.reload.assignee).to be_nil
    end
  end

  describe 'H-01 transiciones de toggle_status (red de seguridad del refactor)' do
    { open: 'resolved', resolved: 'open', pending: 'open', snoozed: 'open' }.each do |from, to|
      it "de #{from} pasa a #{to}" do
        # Arrange
        conversation.update!(status: from)

        # Act
        conversation.toggle_status

        # Assert
        expect(conversation.reload.status).to eq(to)
      end
    end
  end
end
