const db = require("../../config/db");

const executeQuery = async (sql) => {
    try {
        const [rows] = await db.query(sql);
        return rows;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to execute SQL");
    }
};

module.exports = {
    executeQuery,
};