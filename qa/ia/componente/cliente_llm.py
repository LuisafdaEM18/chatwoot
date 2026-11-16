"""Cliente LLM del componente de IA incorporado al proyecto (criterio 14).

Habla con el modelo local de Ollama por su endpoint compatible con OpenAI
(http://localhost:11434/v1), así el mismo código serviría con OpenAI real
cambiando solo QA_IA_BASE_URL y QA_IA_API_KEY.

No usa claves de pago: el modelo corre en el contenedor ollama-qa.
"""
from __future__ import annotations

import json
import os
import urllib.request

BASE_URL = os.environ.get("QA_IA_BASE_URL", "http://localhost:11434/v1")
MODEL = os.environ.get("QA_IA_MODEL", "llama3.1:8b")
API_KEY = os.environ.get("QA_IA_API_KEY", "ollama")  # Ollama ignora la clave; es un marcador.
TIMEOUT = int(os.environ.get("QA_IA_TIMEOUT", "120"))


def chat(messages, temperature=0.0, json_mode=False):
    """Envía una conversación al modelo y devuelve el texto de la respuesta."""
    payload = {
        "model": MODEL,
        "messages": messages,
        "temperature": temperature,
        "stream": False,
    }
    if json_mode:
        payload["response_format"] = {"type": "json_object"}
    req = urllib.request.Request(
        f"{BASE_URL}/chat/completions",
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {API_KEY}"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    return data["choices"][0]["message"]["content"].strip()


def chat_json(messages, temperature=0.0):
    """Igual que chat() pero exige y parsea una respuesta JSON del modelo."""
    texto = chat(messages, temperature=temperature, json_mode=True)
    try:
        return json.loads(texto)
    except json.JSONDecodeError:
        # Los modelos pequeños a veces envuelven el JSON en texto o en ```json ... ```.
        inicio, fin = texto.find("{"), texto.rfind("}")
        if inicio != -1 and fin != -1:
            return json.loads(texto[inicio : fin + 1])
        raise
