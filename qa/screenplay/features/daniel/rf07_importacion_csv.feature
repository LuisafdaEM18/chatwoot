# language: es
@DanielOrtiz @RF07
Característica: [Daniel Ortiz] RF-07 Importación de contactos desde CSV
  Como administradora de la cuenta
  Quiero importar contactos desde un archivo CSV
  Para no registrarlos uno por uno

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-07-01
  Escenario: [CP-07-01] Importar un CSV con tres contactos válidos
    Cuando ella importa un CSV con 3 contactos nuevos
    Entonces ella ve el aviso "You will be notified via email when the import is complete."
    Y los contactos del CSV quedan creados

  @CP-07-03
  Escenario: [CP-07-03] Una importación sin archivo se rechaza
    Cuando ella envía la importación sin archivo por la API
    Entonces la API responde 422
