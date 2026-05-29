import requests

OLLAMA_URL = "http://localhost:11434/api/generate"

MODEL_NAME = "gemma4:26b"

def analyze_idea(prompt):

    payload = {
        "model": MODEL_NAME,
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(
        OLLAMA_URL,
        json=payload
    )

    return response.json()["response"]