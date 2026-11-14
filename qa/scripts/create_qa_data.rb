# Crea (o reutiliza) la cuenta y los usuarios de prueba que usan Cypress, Screenplay y Stagehand.
# Se puede ejecutar varias veces sin duplicar datos.
#
# Uso, con la pila de docker-compose.production.yaml levantada:
#   docker compose -f docker-compose.production.yaml cp qa/scripts/create_qa_data.rb rails:/tmp/create_qa_data.rb
#   docker compose -f docker-compose.production.yaml exec -e QA_PASSWORD=... rails bundle exec rails runner /tmp/create_qa_data.rb
#
# La contraseña de prueba viene de la variable QA_PASSWORD y debe ser la misma de qa/cypress.env.json.

password = ENV.fetch('QA_PASSWORD')

account = Account.find_or_create_by!(name: 'QA Chatwoot')

users = {
  administrator: { name: 'QA Admin', email: 'qa.admin@chatwoot.test' },
  agent: { name: 'QA Agente', email: 'qa.agent@chatwoot.test' }
}

created = users.map do |role, attrs|
  user = User.find_or_initialize_by(email: attrs[:email])
  user.name = attrs[:name]
  user.password = password
  user.password_confirmation = password
  user.skip_confirmation! unless user.confirmed?
  user.save!
  AccountUser.find_or_create_by!(account: account, user: user) { |au| au.role = role }
  user
end

inbox = account.inboxes.find_by(name: 'QA API') ||
        Inbox.create!(account: account, name: 'QA API', channel: Channel::Api.create!(account: account))
created.each { |user| InboxMember.find_or_create_by!(inbox: inbox, user: user) }

puts({ account_id: account.id, inbox_id: inbox.id, users: created.map(&:email) }.to_json)
