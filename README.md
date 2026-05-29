# 🏛️ Venture Verdict

## AI Boardroom for Startup Validation

Venture Verdict is an AI-powered startup validation platform that simulates a real boardroom discussion using multiple stakeholder perspectives.

Instead of receiving feedback from a single AI response, founders can evaluate their startup ideas through the lens of:

* 🧑‍💼 CEO
* 💰 CFO
* ⚙️ CTO
* 💵 Investor
* 👤 Customer
* 🥷 Competitor

Each stakeholder analyzes the startup idea independently and contributes to a final board-level verdict.

---

# Problem Statement

Founders often validate startup ideas through:

* Friends
* Colleagues
* Social media
* Personal intuition

This creates confirmation bias and can result in poor decision-making.

Before investing months of effort into building a startup, founders need critical feedback from multiple perspectives.

---

# Solution

Venture Verdict uses Google Gemma 4 running locally through Ollama to simulate a board meeting.

The user enters a startup idea.

Gemma generates:

* CEO Perspective
* CFO Perspective
* CTO Perspective
* Investor Perspective
* Customer Perspective
* Competitor Perspective
* Final Verdict
* Confidence Score

This enables founders to stress-test ideas before committing time and resources.

---

# Why Gemma 4?

Gemma 4 is the core reasoning engine of Venture Verdict.

Gemma is responsible for:

* Simulating multiple stakeholder personas
* Evaluating startup opportunities
* Identifying risks
* Challenging assumptions
* Producing a final board-level recommendation

All reasoning is performed locally using Ollama.

Benefits:

* Privacy
* Low latency
* No external API costs
* Offline capability
* Startup ideas never leave the machine

---

# Architecture

Frontend (React + Vite)

↓

Backend (FastAPI)

↓

Ollama

↓

Gemma 4 (26B)

---

# Tech Stack

Frontend

* React
* Vite
* React Markdown

Backend

* Python
* FastAPI
* Requests

AI Layer

* Ollama
* Gemma 4 26B

---

# Project Structure

boardroom-ai/

├── backend/

│   ├── main.py

│   ├── gemma_service.py

│   ├── prompts.py

│   └── requirements.txt

│

├── frontend/

│   ├── src/

│   │   ├── App.jsx

│   │   ├── App.css

│   │   └── index.css

│

│   ├── package.json

│   └── vite.config.js

│

└── README.md

---

# Prerequisites

Install:

* Python 3.10+
* Node.js
* npm
* Ollama

---

# Install Ollama

https://ollama.com

Verify installation:

```bash
ollama --version
```

---

# Pull Gemma 4

```bash
ollama pull gemma4:26b
```

Verify:

```bash
ollama list
```

Expected:

```bash
gemma4:26b
```

---

# Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python3 -m venv venv
```

Activate:

Mac/Linux

```bash
source venv/bin/activate
```

Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# How To Use

1. Open the application
2. Enter a startup idea
3. Click "⚖️ Convene Board Meeting"
4. Review feedback from:

   * CEO
   * CFO
   * CTO
   * Investor
   * Customer
   * Competitor
5. Analyze the final verdict and confidence score

---

# Example Startup Ideas

### Education

AI tutor for engineering students preparing for placements

### Healthcare

Drone delivery network for healthcare in rural India

### Mobility

AI-powered scooter rentals for office commuters in Bangalore

---

# Future Enhancements

* Historical startup evaluations
* Stakeholder weighting
* Investor personas
* Startup comparison mode
* Idea evolution tracking
* Team collaboration
* Structured JSON responses
* Analytics dashboard

---

# Demo Flow

1. Enter startup idea
2. Trigger board meeting
3. Observe stakeholder viewpoints
4. Review final verdict
5. Evaluate confidence score

---

# Why Venture Verdict?

Most AI tools provide a single answer.

Venture Verdict provides multiple perspectives.

Instead of asking:

"What does AI think?"

We ask:

"What would an entire boardroom think?"

This helps founders make better decisions before investing significant time and money into a startup idea.

---

# License

MIT License
