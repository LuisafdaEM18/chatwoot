require 'rails_helper'

# RF-01 Cambio de estado de una conversación (Luisa Fernanda Espinal Montoya)
# Función: Conversation#toggle_status (app/models/conversation.rb)
# Decisiones: D1 open? (línea 174), D2 pending? y D3 snoozed? (línea 175)  ->  V(G) = 4
#
# Hallazgo H-01: la línea 174 ya deja en :open toda conversación que no estaba abierta, así que
# D2 y D3 se evalúan sobre el estado nuevo y siempre son falsas. La rama "entonces" de la línea 175
# es código muerto: de los 4 caminos independientes solo 2 son factibles. La cobertura de ramas
# de SimpleCov lo confirma (rama then de la línea 175 con 0 ejecuciones).
RSpec.describe Conversation, '#toggle_status [RF-01 caja blanca]' do
  let(:conversation) { create(:conversation, status: initial_status) }

  context 'cuando la conversación está abierta (camino 1: D1=V, D2=F, D3=F)' do
    let(:initial_status) { :open }

    it 'la resuelve' do
      conversation.toggle_status

      expect(conversation.reload.status).to eq('resolved')
    end
  end

  context 'cuando la conversación está resuelta (camino 2: D1=F, D2=F, D3=F)' do
    let(:initial_status) { :resolved }

    it 'la vuelve a abrir' do
      conversation.toggle_status

      expect(conversation.reload.status).to eq('open')
    end
  end

  # Caminos 3 (D2=V) y 4 (D3=V): no son factibles. Se intentan con estados pendiente y pospuesto,
  # pero la conversación se abre por el camino 2 (D1=F) antes de llegar a la línea 175.
  context 'cuando la conversación está pendiente (intento del camino 3, recorre el camino 2)' do
    let(:initial_status) { :pending }

    it 'la abre' do
      conversation.toggle_status

      expect(conversation.reload.status).to eq('open')
    end
  end

  context 'cuando la conversación está pospuesta (intento del camino 4, recorre el camino 2)' do
    let(:initial_status) { :snoozed }

    it 'la abre' do
      conversation.toggle_status

      expect(conversation.reload.status).to eq('open')
    end
  end
end
