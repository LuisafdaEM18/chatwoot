require 'rails_helper'

# RF-02 Asignación de una conversación a un agente o equipo (Luisa Fernanda Espinal Montoya)
# Función: Conversations::AssignmentService#perform con assign_agent y assign_ai_assignee
#          (app/services/conversations/assignment_service.rb)
# Decisiones: D1 agent_bot_assignment?, D2 bot encontrado?, D3 assignee.present?,
#             D4 ai_assignee_type.present?, D5 pending?, D6 waiting_since.blank?  ->  V(G) = 7
RSpec.describe Conversations::AssignmentService, '[RF-02 caja blanca]' do
  let(:account) { create(:account) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:agent_bot) { create(:agent_bot, account: account) }
  let(:conversation) { create(:conversation, account: account, status: :open) }

  it 'camino 1 (D1=V, D2=F): con un bot inexistente no cambia nada y devuelve nil' do
    result = described_class.new(conversation: conversation, assignee_id: 0, assignee_type: 'AgentBot').perform

    expect(result).to be_nil
    expect(conversation.reload.ai_assignee).to be_nil
  end

  it 'camino 2 (D1=V, D2=V): asigna el bot, quita el agente y deja la conversación pendiente' do
    conversation.update!(assignee: agent)

    result = described_class.new(conversation: conversation, assignee_id: agent_bot.id, assignee_type: 'AgentBot').perform

    conversation.reload
    expect(result).to eq(agent_bot)
    expect(conversation.ai_assignee).to eq(agent_bot)
    expect(conversation.assignee).to be_nil
    expect(conversation.status).to eq('pending')
  end

  it 'camino 3 (D1=F, D3=F): sin agente válido deja la conversación sin asignar' do
    conversation.update!(assignee: agent)

    result = described_class.new(conversation: conversation, assignee_id: nil).perform

    expect(result).to be_nil
    expect(conversation.reload.assignee).to be_nil
  end

  it 'camino 4 (D1=F, D3=V, D4=F): asigna el agente sin cambiar el estado pendiente' do
    conversation.update!(status: :pending)

    result = described_class.new(conversation: conversation, assignee_id: agent.id).perform

    conversation.reload
    expect(result).to eq(agent)
    expect(conversation.assignee).to eq(agent)
    expect(conversation.status).to eq('pending')
  end

  it 'camino 5 (D3=V, D4=V, D5=F): con la conversación abierta asigna el agente y quita el bot' do
    conversation.update!(ai_assignee: agent_bot, status: :open)

    described_class.new(conversation: conversation, assignee_id: agent.id).perform

    conversation.reload
    expect(conversation.assignee).to eq(agent)
    expect(conversation.ai_assignee).to be_nil
    expect(conversation.status).to eq('open')
  end

  it 'camino 6 (D5=V, D6=F): con la conversación pendiente la abre y conserva waiting_since' do
    waiting_since = 2.hours.ago.change(usec: 0)
    conversation.update!(ai_assignee: agent_bot, status: :pending)
    conversation.update_columns(waiting_since: waiting_since)

    described_class.new(conversation: conversation, assignee_id: agent.id).perform

    conversation.reload
    expect(conversation.status).to eq('open')
    expect(conversation.waiting_since).to eq(waiting_since)
  end

  it 'camino 7 (D5=V, D6=V): con la conversación pendiente y sin waiting_since la abre y lo registra' do
    conversation.update!(ai_assignee: agent_bot, status: :pending)
    conversation.update_columns(waiting_since: nil)

    freeze_time do
      described_class.new(conversation: conversation, assignee_id: agent.id).perform

      conversation.reload
      expect(conversation.status).to eq('open')
      expect(conversation.waiting_since).to eq(Time.current)
    end
  end
end
