require 'rails_helper'

# TDD — Juan Pablo Berrío Díaz (RF-14 Equipos y miembros)
#
# D-08: una petición a team_members sin user_ids respondía 500 (NoMethodError: map sobre nil en
#       validate_member_id_params). Debe responder 422 indicando que falta el parámetro.
#
# Todas siguen AAA y FIRST.
RSpec.describe 'TDD Juan Pablo: equipos', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:agent) { create(:user, account: account, role: :agent) }
  let(:team) { create(:team, account: account) }
  let(:headers) { admin.create_new_auth_token }
  let(:path) { "/api/v1/accounts/#{account.id}/teams/#{team.id}/team_members" }

  describe 'D-08 petición sin user_ids' do
    %i[post patch delete].each do |verb|
      it "#{verb.upcase} responde 422 y no cambia los miembros" do
        # Arrange
        team.add_members([agent.id])

        # Act
        send(verb, path, params: {}, headers: headers, as: :json)

        # Assert
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.parsed_body['error']).to include('user_ids')
        expect(team.reload.members).to contain_exactly(agent)
      end
    end
  end

  it 'con user_ids válidos sigue agregando miembros' do
    # Act
    post path, params: { user_ids: [agent.id] }, headers: headers, as: :json

    # Assert
    expect(response).to have_http_status(:success)
    expect(team.reload.members).to contain_exactly(agent)
  end
end
