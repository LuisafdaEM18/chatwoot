"""DeepEval — Luisa (RF-01 a RF-05, conversaciones).

Evalúa clasificar_conversacion: la tarea de IA que asigna prioridad y etiquetas a
una conversación (como Captain::ConversationClassifierService). Métricas:
- Exactitud de prioridad (determinista, contra el valor esperado).
- F1 de etiquetas (determinista).
- Calidad de la razón (GEval, juez LLM): la explicación debe justificar la prioridad.
"""
from comun import P, LLMTestCase, geval, Reporte
from asistente_soporte import clasificar_conversacion

ETIQUETAS = ["facturación", "ventas", "soporte técnico", "consulta general", "reclamo"]

# Dataset dorado: cada caso trae la prioridad y etiquetas esperadas.
CASOS = [
    {
        "nombre": "Pago caído con pérdida de ventas",
        "mensajes": ["El pago de mi factura falla desde hace 2 horas y estoy perdiendo ventas", "Necesito solución ya"],
        "prioridad": "urgent",
        "etiquetas": {"facturación"},
    },
    {
        "nombre": "Consulta general de horario",
        "mensajes": ["Hola, ¿cuál es el horario de atención los sábados?"],
        "prioridad": "low",
        "etiquetas": {"consulta general"},
    },
    {
        "nombre": "Error que afecta el trabajo",
        "mensajes": ["La app me da error al generar reportes y los necesito para una reunión mañana"],
        "prioridad": "high",
        "etiquetas": {"soporte técnico"},
    },
    {
        "nombre": "Reclamo por cobro doble",
        "mensajes": ["Me cobraron dos veces el mismo pedido, quiero que me devuelvan el dinero"],
        "prioridad": "high",
        "etiquetas": {"facturación", "reclamo"},
    },
    {
        "nombre": "Pregunta de precios",
        "mensajes": ["Buenas, ¿tienen descuentos por volumen en el plan anual?"],
        "prioridad": "low",
        "etiquetas": {"ventas"},
    },
]


def f1(esperadas, obtenidas):
    esperadas, obtenidas = set(esperadas), set(obtenidas)
    if not esperadas and not obtenidas:
        return 1.0
    tp = len(esperadas & obtenidas)
    prec = tp / len(obtenidas) if obtenidas else 0.0
    rec = tp / len(esperadas) if esperadas else 0.0
    return 0.0 if prec + rec == 0 else 2 * prec * rec / (prec + rec)


def main():
    r = Reporte("luisa")
    razon_metric = geval(
        "Calidad de la razón",
        "Evalúa si 'actual output' (una razón de clasificación) justifica de forma coherente, "
        "en español y sin inventar, por qué la conversación de 'input' tiene su prioridad.",
        [P.INPUT, P.ACTUAL_OUTPUT],
        umbral=0.5,
    )
    aciertos_prio = 0
    for c in CASOS:
        res = clasificar_conversacion(c["mensajes"], ETIQUETAS)
        ok_prio = res["priority"] == c["prioridad"]
        aciertos_prio += ok_prio
        r.agrega(c["nombre"], "Prioridad exacta", 1.0 if ok_prio else 0.0, 1.0, ok_prio,
                 f"esperada={c['prioridad']} obtenida={res['priority']}")
        score_f1 = f1(c["etiquetas"], res["labels"])
        r.agrega(c["nombre"], "F1 de etiquetas", score_f1, 0.5, score_f1 >= 0.5,
                 f"esperadas={sorted(c['etiquetas'])} obtenidas={sorted(res['labels'])}")
        tc = LLMTestCase(input=" ".join(c["mensajes"]), actual_output=res["reason"] or "(sin razón)")
        r.mide_geval(c["nombre"], razon_metric, tc)
    print(f"\nExactitud de prioridad: {aciertos_prio}/{len(CASOS)}")
    return r.guardar()


if __name__ == "__main__":
    main()
