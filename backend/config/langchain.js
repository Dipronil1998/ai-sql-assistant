const { ChatOpenAI } = require("@langchain/openai");

const llm = new ChatOpenAI({
  model: "gpt-4.1-mini",
  temperature: 0,
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = llm;