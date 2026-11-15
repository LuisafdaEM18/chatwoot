# language: es
@LuisaEspinal @RF02
Característica: [Luisa Espinal] RF-02 Asignación de una conversación
  Como administradora de la cuenta
  Quiero asignar cada conversación a un agente
  Para que haya un responsable de responderla

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea recibió una conversación con el mensaje "Necesito hablar con un agente"

  @CP-02-01
  Escenario: [CP-02-01] Asignar la conversación a un agente de la bandeja
    Cuando ella abre la conversación
    Y ella asigna la conversación a "QA Agente"
    Entonces ella ve el aviso "Conversation Assignee changed"
    Y el agente asignado es "QA Agente"

  @CP-02-03 @D-02
  Escenario: [CP-02-03] Un agente de otra cuenta se rechaza y se conserva el asignado
    Dado que la conversación está asignada a Carlos
    Cuando ella intenta asignar la conversación a un agente de otra cuenta
    Entonces la API responde 422
    Y el agente asignado es "QA Agente"
