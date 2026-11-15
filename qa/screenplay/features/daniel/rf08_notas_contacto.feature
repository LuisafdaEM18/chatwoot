# language: es
@DanielOrtiz @RF08
Característica: [Daniel Ortiz] RF-08 Notas de contacto
  Como agente de soporte
  Quiero dejar notas en la ficha de un contacto
  Para recordar detalles importantes del cliente

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot
    Y que Andrea tiene un contacto nuevo

  @CP-08-01
  Escenario: [CP-08-01] Agregar una nota al contacto
    Cuando ella agrega la nota "Prefiere que lo llamen en la tarde" al contacto
    Entonces ella ve el aviso "Prefiere que lo llamen en la tarde"
    Y el contacto tiene la nota "Prefiere que lo llamen en la tarde"

  @CP-08-02
  Escenario: [CP-08-02] Eliminar una nota existente
    Dado que el contacto tiene la nota "Nota para borrar"
    Cuando ella elimina la nota "Nota para borrar"
    Entonces el contacto ya no tiene notas
