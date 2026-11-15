# language: es
@JuanPabloBerrio @RF13
Característica: [Juan Pablo Berrío] RF-13 Reglas de automatización
  Como administradora de la cuenta
  Quiero reglas que actúen solas cuando llega un mensaje
  Para clasificar los casos sin intervención manual

  @CP-13-01
  Escenario: [CP-13-01] La regla etiqueta la conversación cuando llega un mensaje con "factura"
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea tiene una regla que etiqueta los mensajes que contienen "factura"
    Cuando ella abre la lista de automatizaciones
    Entonces ella ve la regla en la lista
    Dado que Andrea recibió una conversación con el mensaje "Necesito una copia de mi factura"
    Entonces la conversación recibe la etiqueta de la regla

  @CP-13-03
  Esquema del escenario: [CP-13-03] El retraso de ejecución solo acepta de 10 a 43 200 minutos
    Cuando Andrea intenta crear por la API una regla con retraso de <minutos> minutos
    Entonces la API responde <código>

    Ejemplos: valores límite
      | minutos | código |
      | 9       | 422    |
      | 10      | 200    |
      | 43200   | 200    |
      | 43201   | 422    |
