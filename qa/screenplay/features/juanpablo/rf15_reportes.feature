# language: es
@JuanPabloBerrio @RF15
Característica: [Juan Pablo Berrío] RF-15 Reportes de conversaciones y agentes
  Como administradora de la cuenta
  Quiero ver las métricas de atención
  Para medir el desempeño del equipo

  @CP-15-01
  Escenario: [CP-15-01] Ver las métricas de conversaciones de los últimos 7 días
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea recibió una conversación con el mensaje "Conversación para el reporte"
    Cuando ella abre el reporte de conversaciones
    Entonces ella ve el aviso "Last 7 days"
    Y ella ve el aviso "Messages received"
    Y ella ve el aviso "Resolution Count"

  @CP-15-03
  Escenario: [CP-15-03] Un agente sin permisos no puede consultar los reportes
    Cuando Carlos consulta el resumen de reportes por la API
    Entonces la API responde 401
