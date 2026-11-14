require 'rails_helper'

# RF-09 Atributos personalizados (Daniel Ortiz Ortiz)
# Función: CustomAttributeDefinition#attribute_must_not_conflict (app/models/custom_attribute_definition.rb)
# Decisiones: D1 la clave coincide con un atributo estándar del modelo o de automatización  ->  V(G) = 2
RSpec.describe CustomAttributeDefinition, '#attribute_must_not_conflict [RF-09 caja blanca]' do
  let(:account) { create(:account) }

  it 'camino 1 (D1=V): rechaza una clave reservada del contacto' do
    definition = build(:custom_attribute_definition, account: account, attribute_model: :contact_attribute, attribute_key: 'email')

    expect(definition).not_to be_valid
    expect(definition.errors[:attribute_key]).to include(I18n.t('errors.custom_attribute_definition.key_conflict'))
  end

  it 'camino 2 (D1=F): acepta una clave que no está reservada' do
    definition = build(:custom_attribute_definition, account: account, attribute_model: :contact_attribute, attribute_key: 'qa_nivel')

    expect(definition).to be_valid
  end

  it 'camino 2 con otro modelo: email no está reservado para empresas' do
    definition = build(:custom_attribute_definition, account: account, attribute_model: :company_attribute, attribute_key: 'email')

    expect(definition).to be_valid
  end
end
