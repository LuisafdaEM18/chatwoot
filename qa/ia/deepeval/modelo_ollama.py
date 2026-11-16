"""Modelo juez de DeepEval respaldado por el Ollama local (criterio 14).

DeepEval normalmente usa GPT-4 de OpenAI como juez. Aquí el juez es el mismo
modelo local (llama3.1:8b) por el endpoint compatible con OpenAI, así la
evaluación corre offline y sin claves de pago. Es una limitación conocida: un
juez de 8B es menos fiable que GPT-4 (se discute en qa/docs/criterio14_ia.md).
"""
from __future__ import annotations

import json
import os
import urllib.request

from deepeval.models.base_model import DeepEvalBaseLLM

BASE_URL = os.environ.get("QA_IA_BASE_URL", "http://host.docker.internal:11434/v1")
MODEL = os.environ.get("QA_IA_MODEL", "llama3.1:8b")
TIMEOUT = int(os.environ.get("QA_IA_TIMEOUT", "180"))


def _completar(mensajes, json_mode=False):
    payload = {"model": MODEL, "messages": mensajes, "temperature": 0.0, "stream": False}
    if json_mode:
        payload["response_format"] = {"type": "json_object"}
    req = urllib.request.Request(
        f"{BASE_URL}/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json", "Authorization": "Bearer ollama"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return json.loads(resp.read().decode("utf-8"))["choices"][0]["message"]["content"].strip()


def _parsear_json(texto):
    try:
        return json.loads(texto)
    except json.JSONDecodeError:
        i, f = texto.find("{"), texto.rfind("}")
        if i != -1 and f != -1:
            return json.loads(texto[i : f + 1])
        raise


class ModeloOllama(DeepEvalBaseLLM):
    """Adaptador de Ollama para DeepEval (síncrono y asíncrono)."""

    def load_model(self):
        return MODEL

    def get_model_name(self):
        return f"Ollama ({MODEL})"

    def generate(self, prompt, schema=None, **kwargs):
        if schema is not None:
            # GEval pide un JSON con la forma del `schema` (pydantic). Se lo exigimos al modelo.
            texto = _completar(
                [
                    {
                        "role": "system",
                        "content": "Responde SOLO con un objeto JSON válido que cumpla lo que se pide.",
                    },
                    {"role": "user", "content": prompt},
                ],
                json_mode=True,
            )
            return schema.model_validate(_parsear_json(texto))
        return _completar([{"role": "user", "content": prompt}])

    async def a_generate(self, prompt, schema=None, **kwargs):
        return self.generate(prompt, schema=schema, **kwargs)
