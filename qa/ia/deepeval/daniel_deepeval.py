"""DeepEval — Daniel (RF-06 a RF-10, contactos).

Evalúa resumir_contacto: resume las notas de un contacto (RF-08) sin inventar datos.
Métricas:
- No alucinación (HallucinationMetric, juez LLM): el resumen no debe contradecir ni
  añadir datos que no estén en las notas (el contexto).
- Fidelidad a las notas (GEval): todo lo que dice el resumen sale de las notas.
"""
from comun import P, LLMTestCase, geval, Reporte, JUEZ
from deepeval.metrics import HallucinationMetric
from asistente_soporte import resumir_contacto

CASOS = [
    {
        "nombre": "Carlos Pérez",
        "notas": ["Prefiere que lo llamen en la tarde", "Cliente desde 2021", "Compra sobre todo repuestos"],
    },
    {
        "nombre": "María López",
        "notas": ["Habla solo inglés", "Tiene una reclamación abierta por un envío perdido"],
    },
    {
        "nombre": "Julián Restrepo",
        "notas": ["Pidió factura a nombre de su empresa", "Pago por transferencia"],
    },
    {
        "nombre": "Sofía Martínez (sin notas)",
        "notas": [],
    },
]


def main():
    r = Reporte("daniel")
    fidelidad = geval(
        "Fidelidad a las notas",
        "Evalúa si 'actual output' (un resumen) usa SOLO información presente en 'context' "
        "(las notas del contacto) y no inventa ni contradice datos. Si no había notas, el "
        "resumen debe decir que no hay información.",
        [P.ACTUAL_OUTPUT, P.CONTEXT],
        umbral=0.5,
    )
    for c in CASOS:
        resumen = resumir_contacto(c["nombre"], c["notas"])
        contexto = c["notas"] or ["(el contacto no tiene notas registradas)"]
        tc = LLMTestCase(
            input=f"Resume al contacto {c['nombre']}",
            actual_output=resumen,
            context=contexto,
        )
        r.mide_geval(c["nombre"], fidelidad, tc)
        # HallucinationMetric compara el output contra el contexto provisto.
        halu = HallucinationMetric(threshold=0.5, model=JUEZ, async_mode=False)
        halu.measure(tc)
        # En HallucinationMetric, menor score = mejor; aprueba si score <= umbral.
        r.agrega(c["nombre"], "No alucinación (score bajo=mejor)", halu.score or 0.0, 0.5,
                 (halu.score or 0.0) <= 0.5, (halu.reason or "")[:300])
    return r.guardar()


if __name__ == "__main__":
    main()
