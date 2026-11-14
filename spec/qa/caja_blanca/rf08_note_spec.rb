require 'rails_helper'

# RF-08 Notas de contacto (Daniel Ortiz Ortiz)
# Función: Note#ensure_account_id (app/models/note.rb, callback before_validation)
# Decisiones: D1 contact presente (operador &.)  ->  V(G) = 2
RSpec.describe Note, '#ensure_account_id [RF-08 caja blanca]' do
  let(:contact) { create(:contact) }
  let(:other_account) { create(:account) }

  it 'camino 1 (D1=V): toma la cuenta del contacto aunque se envíe otra' do
    note = described_class.new(content: 'Nota QA', contact: contact, account: other_account)

    note.valid?

    expect(note.account_id).to eq(contact.account_id)
  end

  it 'camino 2 (D1=F): sin contacto deja la cuenta vacía y la nota es inválida' do
    note = described_class.new(content: 'Nota QA', contact: nil, account: other_account)

    expect(note).not_to be_valid
    expect(note.account_id).to be_nil
    expect(note.errors[:account_id]).to be_present
  end
end
