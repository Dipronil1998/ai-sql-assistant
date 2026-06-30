const formatSchema = (schema) => {

    return schema.map(table => {

        const cols = table.columns
            .map(col => `${col.Field} ${col.Type}`)
            .join("\n");

        return `
Table: ${table.table}

${cols}
`;
    }).join("\n");
}

module.exports = formatSchema;