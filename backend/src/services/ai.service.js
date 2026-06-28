const openai = require("../../config/openai");
const SYSTEM_PROMPT = require("../prompts/system.prompt");

const generateSQL = async (question) => {
    try {
        const response = await openai.responses.create({
            model: "gpt-4.1-mini",
            temperature: 0,

            input: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT,
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