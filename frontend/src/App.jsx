import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [idea, setIdea] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const conductMeeting = async () => {
    if (!idea.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          idea: idea
        })
      });

      const data = await response.json();

      setAnalysis(data.analysis);
    } catch (error) {
      console.error(error);
      alert("Failed to contact Venture Verdict");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <>
        <h1>🏛️ Venture Verdict</h1>

        <h3
          style={{
            textAlign: "center",
            color: "#60a5fa",
            marginTop: "-10px",
            marginBottom: "30px"
          }}
        >
          AI Boardroom for Startup Validation
        </h3>
      </>

      <p className="subtitle">
        Six AI stakeholders debate your startup before real investors do.
      </p>

      <div className="examples">
        <button
          onClick={() =>
            setIdea(
              "AI-powered scooter rentals for office commuters in Bangalore"
            )
          }
        >
          Scooter Startup
        </button>

        <button
          onClick={() =>
            setIdea(
              "Drone delivery network for healthcare in rural India"
            )
          }
        >
          Healthcare Drones
        </button>

        <button
          onClick={() =>
            setIdea(
              "AI tutor for engineering students preparing for placements"
            )
          }
        >
          AI Tutor
        </button>
      </div>

      <textarea
        placeholder="Describe your startup idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button className="main-btn" onClick={conductMeeting}>
        ⚖️ Convene Board Meeting
      </button>

      {loading && (
        <div className="loading">
          Executives are debating...
        </div>
      )}

      {analysis && (
        <div className="results">
          <ReactMarkdown>{analysis}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;