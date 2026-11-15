# language: es
@DanielOrtiz @RF10
Característica: [Daniel Ortiz] RF-10 Filtros avanzados y segmentos
  Como administradora de la cuenta
  Quiero filtrar los contactos por sus datos
  Para encontrar grupos de clientes

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-10-01
  Escenario: [CP-10-01] Filtrar los contactos por nombre
    Dado que Andrea tiene un contacto con un nombre único
    Cuando ella filtra los contactos por ese nombre
    Entonces ella ve el contacto filtrado

  @CP-10-03
  Escenario: [CP-10-03] Un filtro con un operador inválido se rechaza
    Cuando ella filtra los contactos por la API con el operador "operador_raro"
    Entonces la API responde 422
    Y el error de la API menciona "Invalid operator"
