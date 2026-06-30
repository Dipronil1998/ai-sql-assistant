const llm = require("../../config/langchain");
const { ChatPromptTemplate } = require("@langchain/core/prompts");

const createSQLChain = (systemPrompt) => {
    const prompt = ChatPromptTemplate.fromMessages([
        ["system", systemPrompt],
        ["human", "{question}"],
    ]);

    return prompt.pipe(llm);
};

module.exports = createSQLChain;