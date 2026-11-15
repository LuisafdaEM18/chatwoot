# language: es
@LuisaEspinal @RF05
Característica: [Luisa Espinal] RF-05 Búsqueda global
  Como agente de soporte
  Quiero buscar mensajes, contactos y conversaciones
  Para encontrar rápido el historial de un cliente

  Antecedentes:
    Dado que Andrea inició sesión en Chatwoot

  @CP-05-01
  Escenario: [CP-05-01] Encontrar una conversación por el texto de un mensaje
    Dado que Andrea recibió una conversación con una palabra única en el mensaje
    Cuando ella busca esa palabra
    Entonces ella ve el aviso "Messages (1)"
    Y ella ve el aviso "Cliente Búsqueda wrote:"

  @CP-05-03
  Escenario: [CP-05-03] Un término inexistente no devuelve resultados
    Cuando ella busca "termino-que-no-existe-xyz"
    Entonces ella ve el aviso "No results found for query 'termino-que-no-existe-xyz'"
