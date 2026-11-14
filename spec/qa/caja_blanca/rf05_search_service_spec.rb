require 'rails_helper'

# RF-05 Búsqueda global (Luisa Fernanda Espinal Montoya)
# Función: SearchService#perform (app/services/search_service.rb)
# Decisiones (case): D1 'Message', D2 'Conversation', D3 'Contact', D4 'Article'  ->  V(G) = 5
RSpec.describe SearchService, '#perform [RF-05 caja blanca]' do
  let(:account) { create(:account) }
  let(:user) { create(:user, account: account, role: :administrator) }
  let(:inbox) { create(:inbox, account: account) }
  let!(:contact) { create(:contact, account: account, name: 'Cliente QA Busqueda', email: 'busqueda.qa@chatwoot.test') }
  let(:params) { { q: 'busqueda.qa' } }

  before do
    create(:inbox_member, user: user, inbox: inbox)
    Current.account = account
  end

  after { Current.account = nil }

  def search(type)
    described_class.new(current_user: user, current_account: account, params: params, search_type: type).perform
  end

  it 'camino 1 (D1=V): con el tipo Message devuelve solo mensajes' do
    expect(search('Message').keys).to eq([:messages])
  end

  it 'camino 2 (D2=V): con el tipo Conversation devuelve solo conversaciones' do
    expect(search('Conversation').keys).to eq([:conversations])
  end

  it 'camino 3 (D3=V): con el tipo Contact devuelve el contacto que coincide' do
    result = search('Contact')

    expect(result.keys).to eq([:contacts])
    expect(result[:contacts]).to include(contact)
  end

  it 'camino 4 (D4=V): con el tipo Article devuelve solo artículos' do
    expect(search('Article').keys).to eq([:articles])
  end

  it 'camino 5 (todas F): con cualquier otro tipo devuelve los cuatro grupos' do
    expect(search('all').keys).to contain_exactly(:contacts, :messages, :conversations, :articles)
  end
end
