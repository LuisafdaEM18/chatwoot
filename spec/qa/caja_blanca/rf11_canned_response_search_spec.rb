require 'rails_helper'

# RF-11 Respuestas predefinidas (Juan Pablo Berrío Díaz)
# Función: CannedResponse.order_by_search (app/models/canned_response.rb)
# Decisiones (CASE de SQL): D1 código corto empieza con el texto (peso 1), D2 código corto contiene
#                           el texto (0,5), D3 contenido contiene el texto (0,2), si no 0  ->  V(G) = 4
RSpec.describe CannedResponse, '.order_by_search [RF-11 caja blanca]' do
  let(:account) { create(:account) }
  let!(:sin_coincidencia) { create(:canned_response, account: account, short_code: 'otro', content: 'Nada que ver') }
  let!(:en_contenido) { create(:canned_response, account: account, short_code: 'despedida', content: 'Gracias por usar qa') }
  let!(:contiene_codigo) { create(:canned_response, account: account, short_code: 'saludo-qa', content: 'Hola') }
  let!(:empieza_codigo) { create(:canned_response, account: account, short_code: 'qa-saludo', content: 'Buenos días') }

  let(:ordered) { account.canned_responses.order_by_search('qa').to_a }

  it 'camino 1 (D1=V): el código corto que empieza con el texto queda primero' do
    expect(ordered.first).to eq(empieza_codigo)
  end

  it 'camino 2 (D1=F, D2=V): el código corto que contiene el texto queda segundo' do
    expect(ordered.second).to eq(contiene_codigo)
  end

  it 'camino 3 (D2=F, D3=V): la coincidencia solo en el contenido queda tercera' do
    expect(ordered.third).to eq(en_contenido)
  end

  it 'camino 4 (todas F): la respuesta sin coincidencias queda al final' do
    expect(ordered.last).to eq(sin_coincidencia)
  end
end
