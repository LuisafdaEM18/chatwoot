require 'rails_helper'

# RF-03 Envío de mensajes y notas privadas (Luisa Fernanda Espinal Montoya)
# Función: Messages::MessageBuilder#content_attributes con convert_to_hash y safe_parse_json
#          (app/builders/messages/message_builder.rb, app/helpers/data_helper.rb)
# Decisiones: D1 params es ActionController::Parameters?, D2 contenido es String?,
#             D3 JSON válido?, D4 contenido es Hash?  ->  V(G) = 5
RSpec.describe Messages::MessageBuilder, '#content_attributes [RF-03 caja blanca]' do
  let(:conversation) { create(:conversation) }
  let(:user) { create(:user, account: conversation.account) }

  it 'camino 1 (D1=F, D2=V, D3=V): convierte el JSON de texto en un hash con claves símbolo' do
    builder = described_class.new(user, conversation, { content: 'Hola', content_attributes: '{"in_reply_to": 5}' })

    expect(builder.send(:content_attributes)).to eq({ in_reply_to: 5 })
  end

  it 'camino 2 (D1=F, D2=V, D3=F): con un JSON mal formado devuelve un hash vacío' do
    builder = described_class.new(user, conversation, { content: 'Hola', content_attributes: '{in_reply_to: ' })

    expect(builder.send(:content_attributes)).to eq({})
  end

  it 'camino 3 (D1=F, D2=F, D4=V): devuelve el hash recibido sin cambios' do
    builder = described_class.new(user, conversation, { content: 'Hola', content_attributes: { in_reply_to: 7 } })

    expect(builder.send(:content_attributes)).to eq({ in_reply_to: 7 })
  end

  it 'camino 4 (D1=F, D2=F, D4=F): con un tipo inesperado devuelve un hash vacío' do
    builder = described_class.new(user, conversation, { content: 'Hola', content_attributes: %w[uno dos] })

    expect(builder.send(:content_attributes)).to eq({})
  end

  it 'camino 5 (D1=V, D4=V): acepta los parámetros de un controlador' do
    params = ActionController::Parameters.new(content: 'Hola', content_attributes: { in_reply_to: 9 })
    builder = described_class.new(user, conversation, params)

    expect(builder.send(:content_attributes)[:in_reply_to]).to eq(9)
  end
end
