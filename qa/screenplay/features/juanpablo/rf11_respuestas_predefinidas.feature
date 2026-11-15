# language: es
@JuanPabloBerrio @RF11
Característica: [Juan Pablo Berrío] RF-11 Respuestas predefinidas
  Como agente de soporte
  Quiero guardar respuestas frecuentes con un código corto
  Para responder más rápido

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-11-01
  Escenario: [CP-11-01] Crear una respuesta predefinida e insertarla en el chat
    Cuando ella crea una respuesta predefinida con el texto "Hola, gracias por escribir a QA Chatwoot"
    Entonces ella ve el aviso "Canned response added successfully."
    Cuando ella la inserta con su código corto en una conversación nueva
    Entonces el editor de respuesta contiene "Hola, gracias por escribir a QA Chatwoot"

  @CP-11-03
  Escenario: [CP-11-03] Un código corto repetido se rechaza
    Dado que Andrea ya tiene una respuesta predefinida con un código nuevo
    Cuando ella intenta crear por la API otra respuesta con el mismo código
    Entonces la API responde 422
