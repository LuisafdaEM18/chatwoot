require 'rails_helper'

# RF-12 Macros (Juan Pablo Berrío Díaz)
# Función: Macros::ExecutionService#perform (app/services/macros/execution_service.rb)
# Decisiones: D1 quedan acciones por ejecutar (ciclo each), D2 la acción lanza una excepción (rescue)  ->  V(G) = 3
RSpec.describe Macros::ExecutionService, '#perform [RF-12 caja blanca]' do
  let(:account) { create(:account) }
  let(:user) { create(:user, account: account, role: :administrator) }
  let(:conversation) { create(:conversation, account: account) }
  let(:macro) { create(:macro, account: account, actions: actions) }
  let(:actions) { [{ 'action_name' => 'add_label', 'action_params' => ['qa-macro'] }] }
  let(:service) { described_class.new(macro, conversation, user) }

  it 'camino 1 (D1=F): sin acciones no cambia la conversación y limpia el usuario actual' do
    allow(macro).to receive(:actions).and_return([])

    service.perform

    expect(conversation.reload.label_list).to be_empty
    expect(Current.user).to be_nil
  end

  it 'camino 2 (D1=V, D2=F): ejecuta la acción de la macro' do
    service.perform

    expect(conversation.reload.label_list).to include('qa-macro')
  end

  context 'cuando una acción falla (camino 3: D1=V, D2=V)' do
    let(:actions) do
      [
        { 'action_name' => 'mute_conversation', 'action_params' => nil },
        { 'action_name' => 'add_label', 'action_params' => ['qa-macro'] }
      ]
    end
    let(:tracker) { instance_double(ChatwootExceptionTracker, capture_exception: true) }

    before do
      allow(service).to receive(:mute_conversation).and_raise(StandardError, 'falla simulada')
      allow(ChatwootExceptionTracker).to receive(:new).and_return(tracker)
    end

    it 'registra el error y continúa con las demás acciones' do
      service.perform

      expect(tracker).to have_received(:capture_exception).once
      expect(conversation.reload.label_list).to include('qa-macro')
    end
  end
end
