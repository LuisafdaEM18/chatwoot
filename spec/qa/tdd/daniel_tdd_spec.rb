require 'rails_helper'

# TDD — Daniel Ortiz Ortiz (RF-09 Atributos personalizados y RF-10 Filtros guardados)
#
# D-03: crear un atributo con un tipo que no existe respondía 500 (ArgumentError del enum).
# D-04: el filtro número 1000 se guardaba, pero la API respondía 422 porque el controlador
#       volvía a validar el registro ya guardado (y entonces ya había 1000).
# D-06: con 1000 filtros, el usuario no podía editar ninguno, porque el límite también se
#       validaba al actualizar. Se encontró al escribir las pruebas de D-04.
#
# Todas siguen AAA y FIRST. Los filtros se insertan con insert_all para que las pruebas del
# límite sean rápidas (una sola consulta en lugar de 999 creaciones).
RSpec.describe 'TDD Daniel: contactos', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:headers) { admin.create_new_auth_token }
  let(:base) { "/api/v1/accounts/#{account.id}" }

  describe 'D-03 tipo de atributo inexistente' do
    it 'el modelo marca el tipo como inválido en lugar de lanzar ArgumentError' do
      # Arrange
      definition = build(:custom_attribute_definition, account: account)
      definition.attribute_display_type = 'color'

      # Act
      valid = definition.valid?

      # Assert
      expect(valid).to be(false)
      expect(definition.errors[:attribute_display_type]).to be_present
    end

    it 'la API responde 422 y no crea el atributo' do
      # Arrange
      params = { custom_attribute_definition: { attribute_display_name: 'Color', attribute_key: 'qa_color',
                                                attribute_display_type: 'color', attribute_model: 'contact_attribute' } }

      # Act / Assert
      expect do
        post "#{base}/custom_attribute_definitions", params: params, headers: headers, as: :json
      end.not_to change(CustomAttributeDefinition, :count)
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'límite de filtros por usuario' do
    let(:query) { { payload: [{ attribute_key: 'name', filter_operator: 'contains', values: ['qa'], query_operator: nil }] } }

    def insert_filters(count)
      now = Time.current
      rows = Array.new(count) do |i|
        { name: "F#{i}", filter_type: 1, query: query, user_id: admin.id, account_id: account.id, created_at: now, updated_at: now }
      end
      CustomFilter.insert_all(rows)
    end

    it 'D-04: con 999 filtros, crear el número 1000 responde con éxito' do
      # Arrange
      insert_filters(999)

      # Act
      post "#{base}/custom_filters", params: { custom_filter: { name: 'Mil', filter_type: 'contact', query: query } },
                                     headers: headers, as: :json

      # Assert
      expect(response).to have_http_status(:success)
      expect(response.parsed_body['name']).to eq('Mil')
      expect(account.custom_filters.where(user: admin).count).to eq(1000)
    end

    it 'D-06: con 1000 filtros puede renombrar uno que ya tiene' do
      # Arrange
      insert_filters(1000)
      filter = account.custom_filters.where(user: admin).first

      # Act
      patch "#{base}/custom_filters/#{filter.id}", params: { custom_filter: { name: 'Renombrado' } },
                                                   headers: headers, as: :json

      # Assert
      expect(response).to have_http_status(:success)
      expect(filter.reload.name).to eq('Renombrado')
    end

    it 'con 1000 filtros sigue rechazando el número 1001' do
      # Arrange
      insert_filters(1000)

      # Act
      post "#{base}/custom_filters", params: { custom_filter: { name: 'Mil uno', filter_type: 'contact', query: query } },
                                     headers: headers, as: :json

      # Assert
      expect(response).to have_http_status(:unprocessable_entity)
      expect(account.custom_filters.where(user: admin).count).to eq(1000)
    end
  end
end
