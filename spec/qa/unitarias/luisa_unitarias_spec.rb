require 'rails_helper'

# Pruebas unitarias — Luisa Fernanda Espinal Montoya (RF-01 Cambio de estado)
# Unidad bajo prueba: Conversation#toggle_status, aislada de la base de datos.
#
# Dobles de prueba:
# - build_stubbed crea la conversación en memoria (sin INSERT), como un fake del registro.
# - save se reemplaza por un mock (expect ... to receive) o por un stub/spy (allow + have_received).
# FIRST: no tocan la base (rápidas), no dependen del orden (independientes), siempre dan el mismo
# resultado (repetibles), se validan solas con expect (auto-verificables) y se escribieron junto con
# el refactor de H-01 (oportunas).
RSpec.describe Conversation, '#toggle_status [RF-01 unitarias]' do
  subject(:conversation) { build_stubbed(:conversation, status: status) }

  context 'cuando está abierta' do
    let(:status) { :open }

    it 'pasa a resuelta y guarda una sola vez (mock de save)' do
      # Arrange
      expect(conversation).to receive(:save).once.and_return(true)

      # Act
      result = conversation.toggle_status

      # Assert
      expect(result).to be(true)
      expect(conversation).to be_resolved
    end
  end

  %i[resolved pending snoozed].each do |initial|
    context "cuando está #{initial}" do
      let(:status) { initial }

      it 'pasa a abierta (spy sobre save)' do
        # Arrange
        allow(conversation).to receive(:save).and_return(true)

        # Act
        conversation.toggle_status

        # Assert
        expect(conversation).to be_open.and have_attributes(status: 'open')
        expect(conversation).to have_received(:save)
      end
    end
  end

  context 'cuando no se puede guardar' do
    let(:status) { :open }

    it 'devuelve false para que el controlador informe el error (stub de save)' do
      # Arrange
      allow(conversation).to receive(:save).and_return(false)

      # Act
      result = conversation.toggle_status

      # Assert
      expect(result).to be(false)
    end
  end

  describe 'validación del estado (D-01)' do
    let(:status) { :open }

    it 'acepta los cuatro estados del enum y rechaza cualquier otro' do
      # Arrange
      valid_statuses = described_class.statuses.keys

      # Act
      conversation.status = 'cerrada'
      conversation.validate

      # Assert
      expect(valid_statuses).to contain_exactly('open', 'resolved', 'pending', 'snoozed')
      expect(conversation.errors[:status]).to include('is not included in the list')
    end
  end
end
