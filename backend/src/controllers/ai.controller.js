const { generateSQL } = require("../services/ai.service");
const { executeQuery } = require("../services/sql.service");
const validateSQL = require("../utils/sqlValidator");

const generateQuery = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                success: false,
                message: "Question is required",
            });
        }

         // Step 1: Generate SQL
        const sql = await generateSQL(question);

        // Step 2: Validate SQL
        validateSQL(sql);

        // Step 3: Execute SQL
        const data = await executeQuery(sql);

        res.json({
            success: true,
            question,
            sql,
            totalRows: data.length,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    generateQuery,
};