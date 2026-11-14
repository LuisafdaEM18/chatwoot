require 'rails_helper'

# RF-14 Equipos y miembros de equipo (Juan Pablo Berrío Díaz)
# Función: Api::V1::Accounts::TeamMembersController#validate_member_id_params
#          (app/controllers/api/v1/accounts/team_members_controller.rb)
# Decisiones: D1 hay IDs de usuarios que no pertenecen a la cuenta  ->  V(G) = 2
RSpec.describe 'Team Members API: validate_member_id_params [RF-14 caja blanca]', type: :request do
  let(:account) { create(:account) }
  let(:admin) { create(:user, account: account, role: :administrator) }
  let(:team) { create(:team, account: account) }
  let(:path) { "/api/v1/accounts/#{account.id}/teams/#{team.id}/team_members" }

  it 'camino 1 (D1=V): rechaza un usuario de otra cuenta' do
    outsider = create(:user, account: create(:account))

    post path, params: { user_ids: [outsider.id] }, headers: admin.create_new_auth_token, as: :json

    expect(response).to have_http_status(:unauthorized)
    expect(response.parsed_body['error']).to eq('Invalid User IDs')
    expect(team.reload.members).to be_empty
  end

  it 'camino 2 (D1=F): agrega a los agentes de la cuenta' do
    agent = create(:user, account: account, role: :agent)

    post path, params: { user_ids: [agent.id] }, headers: admin.create_new_auth_token, as: :json

    expect(response).to have_http_status(:success)
    expect(team.reload.members).to contain_exactly(agent)
  end
end
