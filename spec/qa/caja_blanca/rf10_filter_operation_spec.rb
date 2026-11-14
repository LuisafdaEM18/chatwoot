require 'rails_helper'

# RF-10 Filtros avanzados y segmentos guardados (Daniel Ortiz Ortiz)
# Función: FilterService#filter_operation (app/services/filter_service.rb)
# Decisiones (case): D1 equal_to/not_equal_to, D2 contains/does_not_contain, D3 is_present,
#                    D4 is_not_present, D5 is_greater_than/is_less_than, D6 days_before  ->  V(G) = 7
RSpec.describe FilterService, '#filter_operation [RF-10 caja blanca]' do
  let(:user) { create(:user) }
  let(:service) { described_class.new({}, user) }

  def query(operator, values = ['es'])
    { attribute_key: 'browser_language', filter_operator: operator, values: values }.with_indifferent_access
  end

  def stored_value
    service.instance_variable_get(:@filter_values)['value_0']
  end

  it 'camino 1 (D1=V): equal_to genera IN y guarda los valores' do
    expect(service.filter_operation(query('equal_to'), 0)).to eq('IN (:value_0)')
    expect(stored_value).to eq(['es'])
  end

  it 'camino 2 (D2=V): contains genera ILIKE y rodea los valores con %' do
    expect(service.filter_operation(query('contains', [' es ']), 0)).to eq('ILIKE ANY (ARRAY[:value_0])')
    expect(stored_value).to eq(['%es%'])
  end

  it 'camino 3 (D3=V): is_present genera IS NOT NULL' do
    expect(service.filter_operation(query('is_present'), 0)).to eq('IS NOT NULL')
  end

  it 'camino 4 (D4=V): is_not_present genera IS NULL' do
    expect(service.filter_operation(query('is_not_present'), 0)).to eq('IS NULL')
  end

  it 'camino 5 (D5=V): is_greater_than delega en lt_gt_filter_query' do
    allow(service).to receive(:lt_gt_filter_query).and_return('> :value_0')

    expect(service.filter_operation(query('is_greater_than', [10]), 0)).to eq('> :value_0')
    expect(service).to have_received(:lt_gt_filter_query).with(query('is_greater_than', [10]), 0)
  end

  it 'camino 6 (D6=V): days_before delega en days_before_filter_query' do
    allow(service).to receive(:days_before_filter_query).and_return('< :value_0')

    expect(service.filter_operation(query('days_before', [3]), 0)).to eq('< :value_0')
    expect(service).to have_received(:days_before_filter_query).once
  end

  it 'camino 7 (todas F): un operador no previsto compara por igualdad con el valor como texto' do
    expect(service.filter_operation(query('starts_with'), 0)).to eq('= :value_0')
    expect(stored_value).to eq('["es"]')
  end
end
