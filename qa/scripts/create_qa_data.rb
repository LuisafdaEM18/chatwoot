# Crea (o reutiliza) la cuenta y los usuarios de prueba que usan Cypress, Screenplay y Stagehand.
# Se puede ejecutar varias veces sin duplicar datos.
#
# Uso, con la pila de docker-compose.production.yaml levantada:
#   docker compose -f docker-compose.production.yaml cp qa/scripts/create_qa_data.rb rails:/tmp/create_qa_data.rb
#   docker compose -f docker-compose.production.yaml exec -e QA_PASSWORD=... rails bundle exec rails runner /tmp/create_qa_data.rb
#
# La contraseña de prueba viene de la variable QA_PASSWORD y debe ser la misma de qa/cypress.env.json.

password = ENV.fetch('QA_PASSWORD')

def qa_user(account, role, name, email, password)
  user = User.find_or_initialize_by(email: email)
  user.name = name
  user.password = password
  user.password_confirmation = password
  user.skip_confirmation! unless user.confirmed?
  # Cierra las sesiones de corridas anteriores: Chatwoot pide elegir una sesión (409) al llegar a
  # MAX_USER_SESSIONS (25) y cada corrida de Cypress abre una nueva.
  user.tokens = {}
  user.save!
  user.user_sessions.destroy_all if user.respond_to?(:user_sessions)
  AccountUser.find_or_create_by!(account: account, user: user) { |au| au.role = role }
  user
end

def qa_inbox(account, name)
  account.inboxes.find_by(name: name) ||
    Inbox.create!(account: account, name: name, channel: Channel::Api.create!(account: account))
end

account = Account.find_or_create_by!(name: 'QA Chatwoot')
# Los casos de RF-13 prueban el retraso de ejecución de las automatizaciones.
account.enable_features!('delayed_automations')
admin = qa_user(account, :administrator, 'QA Admin', 'qa.admin@chatwoot.test', password)
agent = qa_user(account, :agent, 'QA Agente', 'qa.agent@chatwoot.test', password)
# Segundo agente de la cuenta, sin acceso a la bandeja: sirve para equipos (RF-14) y permisos.
agent2 = qa_user(account, :agent, 'QA Agente Dos', 'qa.agent2@chatwoot.test', password)

inbox = qa_inbox(account, 'QA API')
[admin, agent].each { |user| InboxMember.find_or_create_by!(inbox: inbox, user: user) }

# Cuenta ajena: los casos de error de RF-01 y RF-02 intentan modificar sus datos.
other_account = Account.find_or_create_by!(name: 'QA Otra Cuenta')
outsider = qa_user(other_account, :administrator, 'QA Externo', 'qa.otro@chatwoot.test', password)
other_inbox = qa_inbox(other_account, 'QA API Externa')
InboxMember.find_or_create_by!(inbox: other_inbox, user: outsider)
other_contact = other_account.contacts.find_or_create_by!(email: 'cliente.externo@chatwoot.test') { |c| c.name = 'Cliente Externo' }
other_contact_inbox = ContactInbox.find_or_create_by!(contact: other_contact, inbox: other_inbox) { |ci| ci.source_id = SecureRandom.uuid }
other_conversation = other_account.conversations.find_by(contact_inbox: other_contact_inbox) ||
                     Conversation.create!(account: other_account, inbox: other_inbox, contact: other_contact,
                                          contact_inbox: other_contact_inbox, status: :open)

# Los tokens de acceso se copian en qa/cypress.env.json (no se sube al repositorio) para las
# pruebas de API con cy.request; así no se inicia sesión por API en cada prueba.
puts JSON.pretty_generate(
  accountId: account.id, inboxId: inbox.id, agentId: agent.id, agent2Id: agent2.id,
  otherAccountId: other_account.id, otherUserId: outsider.id, otherConversationId: other_conversation.display_id,
  adminToken: admin.access_token.token, agentToken: agent.access_token.token,
  agent2Token: agent2.access_token.token, otherToken: outsider.access_token.token
)
