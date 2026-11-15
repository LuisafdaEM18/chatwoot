# language: es
@DanielOrtiz @RF06
Característica: [Daniel Ortiz] RF-06 Gestión de contactos
  Como administradora de la cuenta
  Quiero registrar los datos de los clientes
  Para tener su información de contacto a la mano

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-06-01
  Escenario: [CP-06-01] Crear un contacto con correo y teléfono válidos
    Cuando ella crea el contacto "Ana" "Prueba" con un correo y un teléfono nuevos
    Entonces existe un solo contacto con ese correo, llamado "Ana Prueba" y con el teléfono +57

  @CP-06-03
  Escenario: [CP-06-03] Un correo repetido, aunque cambien las mayúsculas, no se acepta
    Dado que Andrea ya registró un contacto con un correo nuevo
    Cuando ella intenta crear otro contacto con el mismo correo en mayúsculas
    Entonces el formulario del contacto sigue abierto
    Y sigue existiendo un solo contacto con ese correo
