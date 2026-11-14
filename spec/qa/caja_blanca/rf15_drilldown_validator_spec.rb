require 'rails_helper'

# RF-15 Reportes de conversaciones y agentes (Juan Pablo Berrío Díaz)
# Función: Reports::DrilldownTimestampValidator.valid? con bucket_overlaps_requested_range?
#          (app/services/reports/drilldown_timestamp_validator.rb)
# Decisiones: D1 falta o no es entero algún timestamp, D2 since < until, D3 error de fecha (rescue),
#             D4 el bloque empieza antes del fin del rango, D5 el bloque termina después del inicio  ->  V(G) = 6
RSpec.describe Reports::DrilldownTimestampValidator, '.valid? [RF-15 caja blanca]' do
  let(:since) { Time.utc(2026, 11, 1).to_i }
  let(:until_time) { Time.utc(2026, 11, 8).to_i }
  let(:params) { { since: since.to_s, until: until_time.to_s, bucket_timestamp: bucket.to_s, group_by: 'day' } }
  let(:bucket) { Time.utc(2026, 11, 3).to_i }

  it 'camino 1 (D1=V): rechaza un timestamp que no es un número entero' do
    expect(described_class.valid?(params.merge(bucket_timestamp: 'abc'))).to be(false)
  end

  it 'camino 2 (D1=F, D2=F): rechaza un rango en el que since es igual a until' do
    expect(described_class.valid?(params.merge(until: since.to_s))).to be(false)
  end

  it 'camino 3 (D3=V): si el cálculo de fechas lanza un error responde false en lugar de fallar' do
    allow(described_class).to receive(:bucket_end_for).and_raise(ArgumentError, 'fecha fuera de rango')

    expect(described_class.valid?(params)).to be(false)
  end

  it 'camino 4 (D3=F, D4=F): rechaza un bloque que empieza justo donde termina el rango' do
    expect(described_class.valid?(params.merge(bucket_timestamp: until_time.to_s))).to be(false)
  end

  it 'camino 5 (D4=V, D5=F): rechaza un bloque diario que termina justo donde empieza el rango' do
    expect(described_class.valid?(params.merge(bucket_timestamp: (since - 1.day.to_i).to_s))).to be(false)
  end

  it 'camino 6 (D4=V, D5=V): acepta un bloque dentro del rango' do
    expect(described_class.valid?(params)).to be(true)
  end
end
