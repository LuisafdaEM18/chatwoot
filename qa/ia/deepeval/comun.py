"""Utilidades compartidas de las evaluaciones DeepEval (criterio 14)."""
from __future__ import annotations

import json
import os
import sys

sys.path.insert(0, "/qa/ia/componente")  # para importar el componente de IA incorporado

from deepeval.metrics import GEval  # noqa: E402
from deepeval.test_case import LLMTestCase, LLMTestCaseParams  # noqa: E402

from modelo_ollama import ModeloOllama  # noqa: E402

JUEZ = ModeloOllama()
EVID = os.environ.get("QA_IA_EVID", "/qa/evidencias/ia")

P = LLMTestCaseParams


def geval(nombre, criterio, params, umbral=0.5):
    return GEval(
        name=nombre,
        criteria=criterio,
        evaluation_params=params,
        model=JUEZ,
        threshold=umbral,
        async_mode=False,
    )


class Reporte:
    """Acumula resultados y los guarda como JSON y texto para las evidencias."""

    def __init__(self, integrante):
        self.integrante = integrante
        self.filas = []

    def agrega(self, caso, metrica, score, umbral, exito, detalle=""):
        self.filas.append(
            {
                "caso": caso,
                "metrica": metrica,
                "score": round(float(score), 3),
                "umbral": umbral,
                "exito": bool(exito),
                "detalle": detalle[:300],
            }
        )
        estado = "PASA" if exito else "FALLA"
        print(f"  [{estado}] {caso} · {metrica}: {score:.2f} (umbral {umbral})")

    def mide_geval(self, caso, metrica, tc):
        metrica.measure(tc)
        self.agrega(caso, metrica.name, metrica.score or 0, metrica.threshold,
                    (metrica.score or 0) >= metrica.threshold, metrica.reason or "")

    def resumen(self):
        total = len(self.filas)
        ok = sum(1 for f in self.filas if f["exito"])
        return total, ok

    def guardar(self):
        os.makedirs(EVID, exist_ok=True)
        base = f"{EVID}/deepeval_{self.integrante}"
        with open(base + ".json", "w", encoding="utf-8") as fh:
            json.dump(self.filas, fh, ensure_ascii=False, indent=2)
        total, ok = self.resumen()
        with open(base + ".txt", "w", encoding="utf-8") as fh:
            fh.write(f"DeepEval — {self.integrante}\nJuez: {JUEZ.get_model_name()}\n")
            fh.write(f"Resultado: {ok}/{total} métricas aprobadas\n\n")
            for f in self.filas:
                fh.write(f"[{'PASA' if f['exito'] else 'FALLA'}] {f['caso']} · {f['metrica']}: "
                         f"{f['score']} (umbral {f['umbral']})\n    {f['detalle']}\n")
        print(f"\n{self.integrante}: {ok}/{total} métricas aprobadas. Evidencia en {base}.txt")
        return total, ok


__all__ = ["JUEZ", "P", "LLMTestCase", "geval", "Reporte"]
