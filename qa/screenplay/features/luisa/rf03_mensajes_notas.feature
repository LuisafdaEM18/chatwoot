# language: es
@LuisaEspinal @RF03
Característica: [Luisa Espinal] RF-03 Envío de mensajes y notas privadas
  Como agente de soporte
  Quiero responder al cliente y dejar notas internas
  Para atenderlo y coordinarme con mi equipo

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea recibió una conversación con el mensaje "¿Tienen envíos a Medellín?"
    Cuando ella abre la conversación

  @CP-03-01
  Escenario: [CP-03-01] Enviar una respuesta pública al cliente
    Cuando ella responde "Sí, enviamos a todo el país"
    Entonces ella ve el aviso "Sí, enviamos a todo el país"
    Y el último mensaje de la conversación es "Sí, enviamos a todo el país" y es público

  @CP-03-02
  Escenario: [CP-03-02] Agregar una nota privada que solo ven los agentes
    Cuando ella agrega la nota privada "Cliente frecuente, ofrecer descuento"
    Entonces ella ve el aviso "Cliente frecuente, ofrecer descuento"
    Y el último mensaje de la conversación es "Cliente frecuente, ofrecer descuento" y es privado
