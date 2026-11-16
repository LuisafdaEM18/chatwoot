"""Asistente de soporte: componente de IA incorporado al proyecto (criterio 14).

Reproduce, de forma autónoma y offline, tres tareas de IA que Chatwoot resuelve
con Captain (su asistente de IA, que necesita una clave de OpenAI de pago y la
Responses API; ver qa/docs/criterio14_ia.md). Cada tarea se alinea con el módulo
de un integrante y es lo que DeepEval evalúa:

- clasificar_conversacion  -> Luisa (RF-01..05): prioridad y etiquetas.
- resumir_contacto         -> Daniel (RF-06..10): resumen de las notas de un contacto.
- generar_respuesta_predefinida -> Juan Pablo (RF-11..15): respuesta enlatada.

Todas las funciones son deterministas (temperature=0) para que las pruebas sean
repetibles (principio FIRST).
"""
from __future__ import annotations

from cliente_llm import chat, chat_json

PRIORIDADES = ["urgent", "high", "medium", "low"]


def clasificar_conversacion(mensajes, etiquetas_disponibles):
    """Dado el historial de una conversación, decide prioridad y etiquetas.

    Devuelve {"priority": str, "labels": [str], "reason": str}.
    Equivale a Captain::ConversationClassifierService.
    """
    texto = "\n".join(f"- {m}" for m in mensajes)
    sistema = (
        "Eres un asistente de soporte. Clasificas la conversación de un cliente. "
        "Respondes SOLO con un objeto JSON con las claves: "
        '"priority" (uno de: urgent, high, medium, low), '
        '"labels" (lista con 0 a 3 etiquetas tomadas EXACTAMENTE de las disponibles) y '
        '"reason" (una frase corta en español). '
        "urgent = cliente bloqueado con impacto grave o plazo de horas; "
        "high = problema importante que corre prisa pero no es emergencia; "
        "medium = petición normal sin urgencia; low = comentario o info que puede esperar."
    )
    usuario = (
        f"Etiquetas disponibles: {', '.join(etiquetas_disponibles)}\n\n"
        f"Mensajes de la conversación:\n{texto}"
    )
    data = chat_json(
        [{"role": "system", "content": sistema}, {"role": "user", "content": usuario}]
    )
    prioridad = str(data.get("priority", "")).lower().strip()
    if prioridad not in PRIORIDADES:
        prioridad = "medium"
    etiquetas = [e for e in data.get("labels", []) if e in etiquetas_disponibles][:3]
    return {"priority": prioridad, "labels": etiquetas, "reason": data.get("reason", "")}


def resumir_contacto(nombre, notas):
    """Resume en 1-2 frases lo que el equipo sabe de un contacto, sin inventar.

    Solo puede usar la información de `notas`. Es lo que un agente vería al abrir
    la ficha del contacto (RF-08 notas de contacto).
    """
    sistema = (
        "Eres un asistente de soporte. Resumes en español, en una o dos frases, lo que el "
        "equipo sabe de un cliente a partir de sus notas. Usa SOLO la información de las notas; "
        "no inventes datos. Si no hay notas, dilo."
    )
    usuario = f"Cliente: {nombre}\nNotas:\n" + "\n".join(f"- {n}" for n in notas)
    return chat([{"role": "system", "content": sistema}, {"role": "user", "content": usuario}])


def generar_respuesta_predefinida(tema, tono="cordial y profesional"):
    """Redacta una respuesta predefinida (canned response) para un tema (RF-11)."""
    sistema = (
        "Eres un agente de soporte al cliente. Redactas una respuesta breve (2 a 4 frases) "
        f"en español, con un tono {tono}, lista para guardar como respuesta predefinida. "
        "Saluda, atiende el tema y ofrece ayuda. No uses marcadores ni variables falsas."
    )
    usuario = f"Tema de la respuesta: {tema}"
    return chat([{"role": "system", "content": sistema}, {"role": "user", "content": usuario}])
