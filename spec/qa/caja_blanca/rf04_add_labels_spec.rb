require 'rails_helper'

# RF-04 Gestión de etiquetas y su aplicación a conversaciones (Luisa Fernanda Espinal Montoya)
# Función: Labelable#add_labels (app/models/concerns/labelable.rb)
# Decisiones: D1 new_labels.blank?  ->  V(G) = 2
RSpec.describe Labelable, '#add_labels [RF-04 caja blanca]' do
  let(:conversation) { create(:conversation) }

  before { conversation.update_labels(['qa-existente']) }

  it 'camino 1 (D1=V): sin etiquetas nuevas no modifica la conversación' do
    result = conversation.add_labels(nil)

    expect(result).to be_nil
    expect(conversation.reload.label_list).to contain_exactly('qa-existente')
  end

  it 'camino 2 (D1=F): agrega la etiqueta nueva y conserva las anteriores' do
    conversation.add_labels('qa-soporte')

    expect(conversation.reload.label_list).to contain_exactly('qa-existente', 'qa-soporte')
  end
end
