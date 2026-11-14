require 'rails_helper'

# Pruebas unitarias — Juan Pablo Berrío Díaz (RF-14 Equipos y miembros)
# Unidad bajo prueba: Team#add_members, Team#remove_members y la normalización del nombre.
#
# Dobles de prueba:
# - La asociación team_members se reemplaza por un double; create y where son mocks que verifican
#   los argumentos con los que el modelo llama a la base.
# - Los miembros creados son instance_double(TeamMember), dobles verificados.
# - update_account_cache es un mock: se comprueba que se invalida la caché de la cuenta.
RSpec.describe Team, 'miembros [RF-14 unitarias]' do
  subject(:team) { build_stubbed(:team) }

  let(:members) { double('team_members') }
  let(:ana) { build_stubbed(:user, name: 'Ana') }
  let(:beto) { build_stubbed(:user, name: 'Beto') }

  before do
    allow(team).to receive(:team_members).and_return(members)
  end

  describe '#add_members' do
    it 'crea un miembro por cada id, devuelve los usuarios e invalida la caché' do
      # Arrange
      created = [instance_double(TeamMember, user: ana), instance_double(TeamMember, user: beto)]
      expect(members).to receive(:create).with([{ user_id: ana.id }, { user_id: beto.id }]).and_return(created)
      expect(team).to receive(:update_account_cache).once

      # Act
      result = team.add_members([ana.id, beto.id])

      # Assert
      expect(result).to eq([ana, beto])
    end

    it 'descarta los miembros que no se pudieron crear (sin usuario)' do
      # Arrange
      created = [instance_double(TeamMember, user: ana), instance_double(TeamMember, user: nil)]
      allow(members).to receive(:create).and_return(created)
      allow(team).to receive(:update_account_cache)

      # Act
      result = team.add_members([ana.id, 999])

      # Assert
      expect(result).to contain_exactly(ana)
    end
  end

  describe '#remove_members' do
    it 'borra solo los miembros indicados e invalida la caché' do
      # Arrange
      scope = double('scope')
      expect(members).to receive(:where).with(user_id: [ana.id]).and_return(scope)
      expect(scope).to receive(:destroy_all)
      expect(team).to receive(:update_account_cache)

      # Act / Assert (los mocks se verifican al terminar el ejemplo)
      team.remove_members([ana.id])
    end
  end
end

RSpec.describe Team, 'normalización del nombre [RF-14 unitarias]' do
  it 'quita caracteres de control y espacios y lo pasa a minúsculas antes de validar' do
    # Arrange
    team = described_class.new(name: "  Soporte\tNivel 2 \n")

    # Act
    team.validate

    # Assert
    expect(team.name).to eq('soportenivel 2')
  end
end
