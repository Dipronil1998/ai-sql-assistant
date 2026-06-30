const openai = require("../../config/openai");
const getSystemPrompt = require("../prompts/system.prompt");
const SYSTEM_PROMPT = require("../prompts/system.prompt");
const loadSchema = require("./redis.service");

const generateSQL = async (question) => {
    try {
        const schema = await loadSchema();

        const systemPrompt = getSystemPrompt(schema);

        console.log(systemPrompt); 


        const response = await openai.responses.create({
            model: "gpt-4.1-mini",
            temperature: 0,

            input: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: question,
                },
            ],
        });

        return response.output_text.trim();
    } catch (error) {
        console.error(error);
        throw new Error("Failed to generate SQL");
    }
};

module.exports = {
    generateSQL,
};