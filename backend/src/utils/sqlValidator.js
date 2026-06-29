const validateSQL = (sql) => {
    const upper = sql.toUpperCase().trim();

    const forbidden = [
        "INSERT",
        "UPDATE",
        "DELETE",
        "DROP",
        "ALTER",
        "TRUNCATE",
        "CREATE",
        "REPLACE",
        "GRANT",
        "REVOKE",
    ];

    if (!upper.startsWith("SELECT")) {
        throw new Error("Only SELECT queries are allowed.");
    }

    for (const keyword of forbidden) {
        const regex = new RegExp(`\\b${keyword}\\b`);

        if (regex.test(upper)) {
            throw new Error(`Forbidden keyword: ${keyword}`);
        }
    }

    return true;
};

module.exports = validateSQL;