const createSQLChain = require("../chains/sql.chain");
const getSystemPrompt = require("../prompts/system.prompt");
const loadSchema = require("./redis.service");

const generateSQL = async (question) => {
    const schema = await loadSchema();

    const chain = createSQLChain(
        getSystemPrompt(schema)
    );

    const response = await chain.invoke({
        question,
    });

    return response.content.trim();
};

module.exports = {
    generateSQL,
};