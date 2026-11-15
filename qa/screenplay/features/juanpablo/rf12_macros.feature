# language: es
@JuanPabloBerrio @RF12
Característica: [Juan Pablo Berrío] RF-12 Macros
  Como agente de soporte
  Quiero ejecutar varias acciones con un solo clic
  Para cerrar los casos repetitivos sin pasos manuales

  @CP-12-01
  Escenario: [CP-12-01] Ejecutar una macro que etiqueta, asigna un equipo y resuelve
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea tiene una macro global que etiqueta, asigna un equipo y resuelve
    Y que Andrea recibió una conversación con el mensaje "Ya resolvieron mi caso"
    Cuando ella abre la conversación
    Y ella ejecuta esa macro
    Entonces ella ve el aviso "Macro executed successfully"
    Y la conversación queda en estado "resolved"
    Y la conversación tiene la etiqueta y el equipo de la macro

  @CP-12-02
  Escenario: [CP-12-02] Una macro personal no la ve otro agente; la global sí
    Dado que Andrea creó una macro personal y una macro global
    Cuando Carlos consulta las macros por la API
    Entonces Carlos ve la macro global de Andrea pero no la personal
