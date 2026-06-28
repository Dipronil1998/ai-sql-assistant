import { useState } from "react";
import { generateSQL } from "../api/ai";

export default function useChat() {
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState("");
    const [sql, setSql] = useState("");
    const [rows, setRows] = useState([]);
    const [totalRows, setTotalRows] = useState(0);

    const askAI = async (prompt) => {
        try {
            setLoading(true);

            const result = await generateSQL(prompt);

            setQuestion(result.question);
            setSql(result.sql);
            setRows(result.rows);
            setTotalRows(result.totalRows);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        question,
        sql,
        rows,
        totalRows,
        askAI,
    };
}