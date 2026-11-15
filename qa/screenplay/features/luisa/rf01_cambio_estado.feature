# language: es
@LuisaEspinal @RF01
Característica: [Luisa Espinal] RF-01 Cambio de estado de una conversación
  Como administradora de la cuenta
  Quiero cambiar el estado de las conversaciones
  Para saber cuáles siguen pendientes de atención

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea recibió una conversación con el mensaje "Quiero cambiar mi plan"

  @CP-01-01
  Escenario: [CP-01-01] Resolver una conversación abierta
    Cuando ella abre la conversación
    Y ella resuelve la conversación
    Entonces ella ve el aviso "Conversation status changed"
    Y la conversación queda en estado "resolved"

  @CP-01-03 @D-01
  Escenario: [CP-01-03] Un estado que no existe se rechaza y la conversación sigue abierta
    Cuando ella intenta cambiar el estado de la conversación a "cerrada" por la API
    Entonces la API responde 422
    Y la conversación queda en estado "open"
