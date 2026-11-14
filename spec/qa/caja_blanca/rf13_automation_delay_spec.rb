require 'rails_helper'

# RF-13 Reglas de automatización (Juan Pablo Berrío Díaz)
# Función: AutomationRule#execution_delay_supported_event (app/models/automation_rule.rb)
# Decisiones: D1 execution_delay.blank?, D2 conditions.blank?, D3 event_name == 'message_created',
#             D4 todas las condiciones son de estado o bandeja  ->  V(G) = 5
RSpec.describe AutomationRule, '#execution_delay_supported_event [RF-13 caja blanca]' do
  let(:account) { create(:account) }
  let(:status_condition) { { 'attribute_key' => 'status', 'filter_operator' => 'equal_to', 'values' => ['open'], 'query_operator' => nil } }
  let(:priority_condition) { { 'attribute_key' => 'priority', 'filter_operator' => 'equal_to', 'values' => ['high'], 'query_operator' => nil } }
  let(:rule) do
    build(:automation_rule, account: account, event_name: event_name, execution_delay: execution_delay, conditions: conditions)
  end
  let(:event_name) { 'conversation_updated' }
  let(:execution_delay) { 30 }
  let(:conditions) { [priority_condition] }

  before { rule.send(:execution_delay_supported_event) }

  context 'camino 1 (D1=V): sin retraso' do
    let(:execution_delay) { nil }

    it('no agrega errores') { expect(rule.errors[:execution_delay]).to be_empty }
  end

  context 'camino 2 (D1=F, D2=V): con retraso y sin condiciones' do
    let(:conditions) { [] }

    it('no agrega errores') { expect(rule.errors[:execution_delay]).to be_empty }
  end

  context 'camino 3 (D3=V): con retraso en el evento message_created' do
    let(:event_name) { 'message_created' }

    it('no agrega errores') { expect(rule.errors[:execution_delay]).to be_empty }
  end

  context 'camino 4 (D4=V): con retraso y solo condiciones de estado' do
    let(:conditions) { [status_condition] }

    it('no agrega errores') { expect(rule.errors[:execution_delay]).to be_empty }
  end

  context 'camino 5 (D4=F): con retraso y una condición de prioridad' do
    it 'rechaza la regla' do
      expect(rule.errors[:execution_delay]).to include('only supports status and inbox conditions for conversation-level events.')
    end
  end
end
