const pool = require("../../config/db");

const getDatabaseSchema = async () => {
    const [tables] = await pool.query("SHOW TABLES");

    const schema = [];

    for (const table of tables) {
        const tableName = Object.values(table)[0];

        const [columns] = await pool.query(`SHOW FULL COLUMNS FROM \`${tableName}\``);

        schema.push({
            table: tableName,
            columns
        });
    }

    return schema;
};

module.exports = {
    getDatabaseSchema
};