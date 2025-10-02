import React, { useState, useEffect } from "react";
import FormInput from "./FormInput"; // import your component

export default function FeedbackDashboard() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setFeedbacks([
      { id: 1, name: "Alice", text: "Street lights not working", status: "Pending" },
      { id: 2, name: "John", text: "Water shortage in my area", status: "Answered" },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !feedback.trim()) return;

    const newFeedback = {
      id: feedbacks.length + 1,
      name,
      text: feedback,
      status: "Pending",
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setName("");
    setFeedback("");
    // After submitting, navigate to dashboard
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Public Service Feedback Portal
      </h1>

      {/* Feedback form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
        <h2 className="text-xl font-semibold mb-6">Submit Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            id="name"
            label="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <div className="space-y-1">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-gray-700"
            >
              Your Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Describe your issue or suggestion..."
              required
              rows="5"
              className="w-full px-4 py-3 border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Submitted feedbacks */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-xl font-semibold mb-6">Your Submitted Feedbacks</h2>

        {feedbacks.length === 0 ? (
          <p className="text-gray-500">No feedback submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {feedbacks.map((fb) => (
              <li
                key={fb.id}
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium">{fb.name}</p>
                  <p className="text-gray-600 text-sm">{fb.text}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    fb.status === "Answered"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {fb.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
