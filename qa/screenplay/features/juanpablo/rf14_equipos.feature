# language: es
@JuanPabloBerrio @RF14
Característica: [Juan Pablo Berrío] RF-14 Equipos y miembros
  Como administradora de la cuenta
  Quiero organizar a los agentes en equipos
  Para repartir el trabajo por área

  @CP-14-01
  Escenario: [CP-14-01] Crear un equipo y agregarle dos agentes
    Dado que Andrea inició sesión en Chatwoot
    Cuando ella crea un equipo nuevo con los agentes "qa.agent@chatwoot.test" y "qa.agent2@chatwoot.test"
    Entonces el equipo tiene como miembros a "qa.agent@chatwoot.test" y "qa.agent2@chatwoot.test"

  @CP-14-03
  Escenario: [CP-14-03] Un agente sin rol de administrador no puede crear equipos
    Cuando Carlos intenta crear un equipo por la API
    Entonces la API responde 401
