# language: es
@DanielOrtiz @RF09
Característica: [Daniel Ortiz] RF-09 Atributos personalizados
  Como administradora de la cuenta
  Quiero agregar campos propios a los contactos
  Para guardar datos que Chatwoot no trae por defecto

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-09-01
  Escenario: [CP-09-01] Crear un atributo de contacto de tipo número
    Cuando ella crea el atributo de contacto "Puntos QA" de tipo "Number"
    Entonces ella ve el aviso "Custom Attribute added successfully!"
    Y el atributo queda registrado en la cuenta

  @CP-09-03 @D-03
  Escenario: [CP-09-03] Un tipo de atributo que no existe se rechaza
    Cuando ella intenta crear por la API un atributo de contacto de tipo "color"
    Entonces la API responde 422
    Y el atributo no queda registrado en la cuenta
