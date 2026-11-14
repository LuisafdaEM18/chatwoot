require 'rails_helper'

# Caja negra — Daniel Ortiz Ortiz (RF-06 a RF-10, módulo de contactos)
# CE = clase de equivalencia, VL = valor límite.
RSpec.describe 'Caja negra: contactos [Daniel]', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}" }

  describe 'RF-06 Gestión de contactos' do
    let(:path) { "#{base}/contacts" }

    it 'CE válida: crea un contacto con correo y teléfono válidos' do
      post path, params: { name: 'QA', email: 'nuevo.qa@chatwoot.test', phone_number: '+573001234567' }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
    end

    {
      'VL mínimo: + y 2 dígitos' => '+57',
      'VL máximo: + y 15 dígitos' => '+123456789012345'
    }.each do |caso, phone|
      it "#{caso} (#{phone}) es válido" do
        post path, params: { name: 'QA', phone_number: phone }, headers: headers, as: :json

        expect(response).to have_http_status(:success)
      end
    end

    {
      'VL: + y 1 dígito' => '+5',
      'VL: + y 16 dígitos' => '+1234567890123456',
      'CE: sin el signo +' => '573001234567',
      'CE: empieza en 0' => '+0573001234',
      'CE: con letras' => '+57300abc4567'
    }.each do |caso, phone|
      it "#{caso} (#{phone}) es rechazado" do
        post path, params: { name: 'QA', phone_number: phone }, headers: headers, as: :json

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    it 'CE inválida: rechaza un correo sin @' do
      post path, params: { name: 'QA', email: 'correo.sin.arroba' }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE inválida: rechaza un correo repetido aunque cambien las mayúsculas' do
      create(:contact, account: account, email: 'repetido.qa@chatwoot.test')

      post path, params: { name: 'QA', email: 'Repetido.QA@chatwoot.test' }, headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'RF-07 Importación CSV' do
    let(:path) { "#{base}/contacts/import" }

    def csv_file(content)
      file = Tempfile.new(['contactos', '.csv'])
      file.write(content)
      file.rewind
      Rack::Test::UploadedFile.new(file.path, 'text/csv')
    end

    it 'CE inválida: rechaza la solicitud sin archivo' do
      post path, headers: headers

      expect(response).to have_http_status(:unprocessable_entity)
    end

    it 'CE válida: crea los contactos válidos y rechaza el de correo inválido' do
      csv = "name,email\nUno QA,uno.import@chatwoot.test\nDos QA,dos.import@chatwoot.test\nMalo QA,correo-malo\n"

      post path, params: { import_file: csv_file(csv) }, headers: headers
      DataImportJob.perform_now(account.data_imports.last)

      data_import = account.data_imports.last.reload
      expect(response).to have_http_status(:success)
      expect(data_import.total_records).to eq(3)
      expect(data_import.processed_records).to eq(2)
      expect(account.contacts.pluck(:email)).to include('uno.import@chatwoot.test', 'dos.import@chatwoot.test')
    end
  end

  describe 'RF-08 Notas de contacto' do
    let(:contact) { create(:contact, account: account) }
    let(:path) { "#{base}/contacts/#{contact.id}/notes" }

    it 'CE válida: crea una nota' do
      post path, params: { note: { content: 'Llamar el lunes' } }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
      expect(contact.notes.count).to eq(1)
    end

    ['', '   '].each do |content|
      it "CE inválida: rechaza la nota con contenido #{content.inspect}" do
        post path, params: { note: { content: content } }, headers: headers, as: :json

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'RF-09 Atributos personalizados' do
    let(:path) { "#{base}/custom_attribute_definitions" }

    def payload(key, display_type: 'text', model: 'contact_attribute')
      { custom_attribute_definition: { attribute_display_name: 'Atributo QA', attribute_key: key,
                                       attribute_display_type: display_type, attribute_model: model } }
    end

    %w[qa_nivel qa.nivel qa-nivel nivel2].each do |key|
      it "CE válida: acepta la clave #{key}" do
        post path, params: payload(key), headers: headers, as: :json

        expect(response).to have_http_status(:success)
      end
    end

    %w[text number currency percent link date list checkbox].each do |type|
      it "CE válida: acepta el tipo #{type}" do
        post path, params: payload("qa_#{type}", display_type: type), headers: headers, as: :json

        expect(response).to have_http_status(:success)
      end
    end

    ['qa nivel', 'qa@nivel', 'email'].each do |key|
      it "CE inválida: rechaza la clave #{key.inspect}" do
        post path, params: payload(key), headers: headers, as: :json

        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    it 'CE inválida: rechaza un tipo que no existe con 422' do
      post path, params: payload('qa_color', display_type: 'color'), headers: headers, as: :json

      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'RF-10 Filtros guardados' do
    let(:path) { "#{base}/custom_filters" }
    let(:query) do
      { payload: [{ attribute_key: 'name', filter_operator: 'contains', values: ['qa'], query_operator: nil }] }
    end

    it 'CE válida: guarda un segmento de contactos' do
      post path, params: { custom_filter: { name: 'Segmento QA', filter_type: 'contact', query: query } }, headers: headers, as: :json

      expect(response).to have_http_status(:success)
    end

    context 'con el límite de 1000 filtros por usuario' do
      before do
        now = Time.current
        rows = Array.new(existing) do |i|
          { name: "F#{i}", filter_type: 1, query: query, user_id: admin.id, account_id: account.id, created_at: now, updated_at: now }
        end
        CustomFilter.insert_all(rows) if rows.any?
      end

      context 'cuando ya tiene 999 (VL: crea el número 1000)' do
        let(:existing) { 999 }

        it 'lo guarda y responde con éxito' do
          post path, params: { custom_filter: { name: 'Mil', filter_type: 'contact', query: query } }, headers: headers, as: :json

          expect(account.custom_filters.where(user_id: admin.id).count).to eq(1000)
          expect(response).to have_http_status(:success)
        end
      end

      context 'cuando ya tiene 1000 (VL: intenta el 1001)' do
        let(:existing) { 1000 }

        it 'lo rechaza' do
          post path, params: { custom_filter: { name: 'Mil uno', filter_type: 'contact', query: query } }, headers: headers, as: :json

          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end
  end
end
