import { useState } from "react";

function ChatInput({ onSubmit, loading }) {
    const [question, setQuestion] = useState("");

    const handleSubmit = () => {
        if (!question.trim()) return;

        onSubmit(question);
        setQuestion("");
    };

    return (
        <div className="space-y-3">
            <textarea
                rows={4}
                value={question}
                placeholder="Example: Show top 5 users by total order amount"
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full border rounded-lg p-4"
            />

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded"
            >
                {loading ? "Generating..." : "Generate SQL"}
            </button>
        </div>
    );
}

export default ChatInput;