require 'rails_helper'

# Regresión — Daniel Ortiz Ortiz (RF-06 a RF-10)
# Verifican que lo que ya funcionaba se conserva después de corregir D-03 (tipos de atributo),
# D-04 y D-06 (límite de filtros). Deben pasar antes y después de los cambios.
RSpec.describe '[Regresión] Daniel: contactos', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}" }

  describe 'RF-06 Gestión de contactos' do
    it 'sigue creando, editando y eliminando un contacto' do
      post "#{base}/contacts", params: { name: 'QA', email: 'regresion.contacto@chatwoot.test' }, headers: headers, as: :json
      contact_id = response.parsed_body.dig('payload', 'contact', 'id')

      patch "#{base}/contacts/#{contact_id}", params: { phone_number: '+573001112233' }, headers: headers, as: :json
      expect(Contact.find(contact_id).phone_number).to eq('+573001112233')

      delete "#{base}/contacts/#{contact_id}", headers: headers, as: :json
      expect(response).to have_http_status(:success)
    end
  end

  describe 'RF-07 Importación CSV' do
    it 'sigue aceptando un archivo y registrando la importación' do
      csv = Tempfile.new(['contactos', '.csv'])
      csv.write("name,email\nRegresión QA,regresion.import@chatwoot.test\n")
      csv.rewind
      file = Rack::Test::UploadedFile.new(csv.path, 'text/csv')

      expect do
        post "#{base}/contacts/import", params: { import_file: file }, headers: headers
      end.to change(account.data_imports, :count).by(1)
      expect(response).to have_http_status(:success)
    end
  end

  describe 'RF-08 Notas de contacto' do
    it 'sigue creando y eliminando notas' do
      contact = create(:contact, account: account)

      post "#{base}/contacts/#{contact.id}/notes", params: { note: { content: 'Nota de regresión' } }, headers: headers, as: :json
      note_id = response.parsed_body['id']
      delete "#{base}/contacts/#{contact.id}/notes/#{note_id}", headers: headers, as: :json

      expect(contact.notes.reload).to be_empty
    end
  end

  describe 'RF-09 Atributos personalizados' do
    %w[text number currency percent link date list checkbox].each do |type|
      it "sigue aceptando el tipo #{type}" do
        post "#{base}/custom_attribute_definitions",
             params: { custom_attribute_definition: { attribute_display_name: "Tipo #{type}", attribute_key: "regresion_#{type}",
                                                      attribute_display_type: type, attribute_model: 'contact_attribute' } },
             headers: headers, as: :json

        expect(response).to have_http_status(:success)
        expect(response.parsed_body['attribute_display_type']).to eq(type)
      end
    end

    it 'sigue permitiendo cambiar el nombre visible de un atributo' do
      definition = create(:custom_attribute_definition, account: account, attribute_display_name: 'Antes')

      patch "#{base}/custom_attribute_definitions/#{definition.id}",
            params: { custom_attribute_definition: { attribute_display_name: 'Después' } }, headers: headers, as: :json

      expect(definition.reload.attribute_display_name).to eq('Después')
    end
  end

  describe 'RF-10 Filtros guardados' do
    let(:query) { { payload: [{ attribute_key: 'name', filter_operator: 'contains', values: ['qa'], query_operator: nil }] } }

    it 'sigue creando, editando y eliminando un filtro lejos del límite' do
      post "#{base}/custom_filters", params: { custom_filter: { name: 'Segmento', filter_type: 'contact', query: query } },
                                     headers: headers, as: :json
      filter_id = response.parsed_body['id']

      patch "#{base}/custom_filters/#{filter_id}", params: { custom_filter: { name: 'Segmento editado' } }, headers: headers, as: :json
      expect(CustomFilter.find(filter_id).name).to eq('Segmento editado')

      delete "#{base}/custom_filters/#{filter_id}", headers: headers, as: :json
      expect(CustomFilter.exists?(filter_id)).to be(false)
    end

    it 'sigue rechazando filtros cuando ya hay 1000' do
      now = Time.current
      CustomFilter.insert_all(Array.new(1000) do |i|
        { name: "F#{i}", filter_type: 1, query: query, user_id: admin.id, account_id: account.id, created_at: now, updated_at: now }
      end)

      post "#{base}/custom_filters", params: { custom_filter: { name: 'Mil uno', filter_type: 'contact', query: query } },
                                     headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
      expect(account.custom_filters.where(user: admin).count).to eq(1000)
    end
  end
end
