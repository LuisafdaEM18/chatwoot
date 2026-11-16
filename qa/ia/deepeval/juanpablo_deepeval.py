"""DeepEval — Juan Pablo (RF-11 a RF-15, productividad).

Evalúa generar_respuesta_predefinida: redacta una respuesta enlatada para un tema
(RF-11 respuestas predefinidas). Métricas (GEval, juez LLM):
- Relevancia: la respuesta atiende el tema pedido.
- Tono de soporte: cordial, profesional y en español, listo para enviar a un cliente.
- Concisión: 2 a 4 frases, sin marcadores ni variables sin rellenar.
"""
from comun import P, LLMTestCase, geval, Reporte
from asistente_soporte import generar_respuesta_predefinida

TEMAS = [
    "saludo inicial de bienvenida al chat",
    "avisar que el pedido va en camino y llega en 2 o 3 días",
    "disculpa por una demora en la respuesta",
    "pedir el número de pedido para poder ayudar",
    "despedida agradeciendo el contacto",
]


def main():
    r = Reporte("juanpablo")
    relevancia = geval(
        "Relevancia",
        "Evalúa si 'actual output' responde al tema indicado en 'input' y sería útil enviarlo "
        "a un cliente sobre ese tema.",
        [P.INPUT, P.ACTUAL_OUTPUT],
        umbral=0.5,
    )
    tono = geval(
        "Tono de soporte",
        "Evalúa si 'actual output' está en español, con un tono cordial y profesional de "
        "atención al cliente, sin groserías ni lenguaje técnico innecesario.",
        [P.ACTUAL_OUTPUT],
        umbral=0.5,
    )
    concision = geval(
        "Concisión y formato",
        "Evalúa si 'actual output' tiene entre 2 y 4 frases y NO contiene marcadores sin "
        "rellenar como [nombre], {variable} o XXXX.",
        [P.ACTUAL_OUTPUT],
        umbral=0.5,
    )
    for tema in TEMAS:
        texto = generar_respuesta_predefinida(tema)
        tc = LLMTestCase(input=f"Respuesta predefinida para: {tema}", actual_output=texto)
        r.mide_geval(tema, relevancia, tc)
        r.mide_geval(tema, tono, tc)
        r.mide_geval(tema, concision, tc)
    return r.guardar()


if __name__ == "__main__":
    main()
