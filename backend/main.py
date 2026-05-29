from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from prompts import get_boardroom_prompt
from gemma_service import analyze_idea

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class IdeaRequest(BaseModel):
    idea: str

@app.get("/")
def home():
    return {"message": "Boardroom AI Backend Running"}

@app.post("/analyze")
def analyze(request: IdeaRequest):

    prompt = get_boardroom_prompt(request.idea)

    result = analyze_idea(prompt)

    return {
        "analysis": result
    }