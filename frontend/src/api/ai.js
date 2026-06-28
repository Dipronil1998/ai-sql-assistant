import api from "./axios";

export const generateSQL = async (question) => {
  const { data } = await api.post("/ai/ask", {
    question,
  });

  return {
    success: data.success,
    question: data.question,
    sql: data.sql,
    totalRows: data.totalRows,
    rows: data.data,
  };
};