import React, { useState } from "react";
import api from "../api";

const EssayReviewer = () => {
  const [essay, setEssay] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleReview = async () => {
    try {
      const res = await api.post("/essay/review", { essay });
      setFeedback(res.data.feedback);
    } catch (err) {
      alert("Error reviewing essay");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Essay Reviewer</h2>
      <textarea
        value={essay}
        onChange={(e) => setEssay(e.target.value)}
        placeholder="Paste your essay here..."
        className="w-full border p-2 rounded h-32"
      />
      <button
        onClick={handleReview}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Review Essay
      </button>
      {feedback && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <h3 className="font-bold">Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default EssayReviewer;
