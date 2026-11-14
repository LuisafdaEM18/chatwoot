require 'rails_helper'

# Pruebas unitarias — Daniel Ortiz Ortiz (RF-10 Filtros guardados y RF-09 Atributos)
# Unidad bajo prueba: CustomFilter#validate_number_of_filters, aislada de la base de datos.
#
# Dobles de prueba:
# - account y su relación custom_filters son dobles verificados (instance_double): solo aceptan
#   métodos que existen en Account y en ActiveRecord::Relation.
# - where es un mock: se verifica que cuenta solo los filtros del mismo usuario.
# - El límite se prueba en 999 y 1000 sin crear mil registros, por eso la prueba es rápida (FIRST).
RSpec.describe CustomFilter, '#validate_number_of_filters [RF-10 unitarias]' do
  subject(:filter) { build_stubbed(:custom_filter, user_id: 7) }

  def stub_user_filter_count(count)
    all_filters = instance_double(ActiveRecord::Relation)
    user_filters = instance_double(ActiveRecord::Relation, size: count)
    allow(filter).to receive(:account).and_return(instance_double(Account, custom_filters: all_filters))
    expect(all_filters).to receive(:where).with(user_id: 7).and_return(user_filters)
  end

  it 'VL 999: deja crear el filtro número 1000 sin errores' do
    # Arrange
    stub_user_filter_count(Limits::MAX_CUSTOM_FILTERS_PER_USER - 1)

    # Act
    result = filter.validate_number_of_filters

    # Assert
    expect(result).to be(true)
    expect(filter.errors).to be_empty
  end

  it 'VL 1000: rechaza el filtro número 1001 con el mensaje del límite' do
    # Arrange
    stub_user_filter_count(Limits::MAX_CUSTOM_FILTERS_PER_USER)

    # Act
    filter.validate_number_of_filters

    # Assert
    expect(filter.errors[:account_id]).to contain_exactly(I18n.t('errors.custom_filters.number_of_records'))
  end

  describe 'cuándo se valida el límite (D-06)' do
    before { allow(filter).to receive(:validate_number_of_filters) }

    it 'no lo revisa al actualizar un filtro existente (spy)' do
      # Act
      filter.valid?(:update)

      # Assert
      expect(filter).not_to have_received(:validate_number_of_filters)
    end

    it 'sí lo revisa al crear (spy)' do
      # Act
      filter.valid?(:create)

      # Assert
      expect(filter).to have_received(:validate_number_of_filters).once
    end
  end
end

RSpec.describe CustomAttributeDefinition, 'tipo de atributo [RF-09 unitarias]' do
  subject(:definition) { build_stubbed(:custom_attribute_definition) }

  it 'acepta los ocho tipos del enum' do
    # Arrange
    types = described_class.attribute_display_types.keys

    # Act / Assert
    expect(types).to eq(%w[text number currency percent link date list checkbox])
  end

  it 'un tipo desconocido queda como error de validación y no como excepción (D-03)' do
    # Act
    assign = -> { definition.attribute_display_type = 'color' }

    # Assert
    expect(&assign).not_to raise_error
    expect(definition.tap(&:validate).errors[:attribute_display_type]).to include('is not included in the list')
  end
end
