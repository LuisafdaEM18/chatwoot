require 'rails_helper'

# RF-06 Gestión de contactos (Daniel Ortiz Ortiz)
# Función: Contact#prepare_contact_attributes con prepare_email_attribute y prepare_jsonb_attributes
#          (app/models/contact.rb, callback before_validation)
# Decisiones: D1 email.present?, D2 additional_attributes.blank?, D3 custom_attributes.blank?  ->  V(G) = 4
RSpec.describe Contact, '#prepare_contact_attributes [RF-06 caja blanca]' do
  let(:account) { create(:account) }

  it 'camino 1 (D1=V, D2=F, D3=F): pasa el correo a minúsculas y conserva los atributos' do
    contact = described_class.new(account: account, name: 'QA', email: 'QA.Contacto@Chatwoot.TEST',
                                  additional_attributes: { 'city' => 'Medellín' }, custom_attributes: { 'nivel' => 2 })

    contact.valid?

    expect(contact.email).to eq('qa.contacto@chatwoot.test')
    expect(contact.additional_attributes).to eq({ 'city' => 'Medellín' })
    expect(contact.custom_attributes).to eq({ 'nivel' => 2 })
  end

  it 'camino 2 (D1=F): convierte el correo vacío en nil para no violar la restricción única' do
    contact = described_class.new(account: account, name: 'QA', email: '')

    contact.valid?

    expect(contact.email).to be_nil
  end

  it 'camino 3 (D2=V): inicializa additional_attributes como un hash vacío' do
    contact = described_class.new(account: account, name: 'QA', additional_attributes: nil)

    contact.valid?

    expect(contact.additional_attributes).to eq({})
  end

  it 'camino 4 (D3=V): inicializa custom_attributes como un hash vacío' do
    contact = described_class.new(account: account, name: 'QA', custom_attributes: nil)

    contact.valid?

    expect(contact.custom_attributes).to eq({})
  end
end
