require 'rails_helper'

# RF-07 Importación de contactos desde un archivo CSV (Daniel Ortiz Ortiz)
# Función: DataImport::ContactManager#find_existing_contact (app/services/data_import/contact_manager.rb)
# Decisiones: D1 no encontrado por identificador, D2 no encontrado por correo,
#             D3 contact.present?, D4 contact.valid?  ->  V(G) = 5
RSpec.describe DataImport::ContactManager, '#find_existing_contact [RF-07 caja blanca]' do
  let(:account) { create(:account) }
  let(:manager) { described_class.new(account) }

  it 'camino 1 (D1=F, D3=V, D4=V): encuentra por identificador y actualiza el nombre' do
    existing = create(:contact, account: account, identifier: 'qa-id-1', name: 'Nombre viejo')

    result = manager.find_existing_contact({ identifier: 'qa-id-1', name: 'Nombre nuevo' })

    expect(result).to eq(existing)
    expect(existing.reload.name).to eq('Nombre nuevo')
  end

  it 'camino 2 (D1=V, D2=F): si no hay identificador encuentra por correo' do
    existing = create(:contact, account: account, email: 'importado.qa@chatwoot.test')

    result = manager.find_existing_contact({ email: 'importado.qa@chatwoot.test', name: 'Importado' })

    expect(result).to eq(existing)
    expect(existing.reload.name).to eq('Importado')
  end

  it 'camino 3 (D1=V, D2=V): si no hay correo encuentra por teléfono, aunque llegue sin el signo +' do
    existing = create(:contact, account: account, phone_number: '+573001112233')

    result = manager.find_existing_contact({ phone_number: '573001112233' })

    expect(result).to eq(existing)
  end

  it 'camino 4 (D3=F): si no encuentra ningún contacto devuelve nil' do
    result = manager.find_existing_contact({ email: 'no.existe.qa@chatwoot.test' })

    expect(result).to be_nil
  end

  it 'camino 5 (D3=V, D4=F): si el contacto existente es inválido lo devuelve sin actualizarlo' do
    existing = create(:contact, account: account, identifier: 'qa-id-invalido', name: 'Sin cambios')
    existing.update_column(:email, 'correo-invalido')

    result = manager.find_existing_contact({ identifier: 'qa-id-invalido', name: 'Cambio' })

    expect(result).to eq(existing)
    expect(existing.reload.name).to eq('Sin cambios')
  end
end
