# language: es
@LuisaEspinal @RF04
Característica: [Luisa Espinal] RF-04 Gestión de etiquetas
  Como administradora de la cuenta
  Quiero crear etiquetas y aplicarlas a las conversaciones
  Para clasificar los casos por tema

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-04-01
  Escenario: [CP-04-01] Crear una etiqueta y aplicarla a una conversación
    Dado que Andrea recibió una conversación con el mensaje "Tengo un problema con el soporte"
    Cuando ella crea una etiqueta nueva que empieza por "qa-soporte"
    Entonces ella ve el aviso "Label added successfully"
    Cuando ella abre la conversación
    Y ella aplica esa etiqueta a la conversación
    Entonces la conversación tiene esa etiqueta

  @CP-04-03
  Escenario: [CP-04-03] Una etiqueta con símbolos se rechaza
    Cuando ella intenta crear la etiqueta "qa!"
    Entonces ella ve el aviso "Title is invalid"
    Y la etiqueta "qa!" no existe en la cuenta
