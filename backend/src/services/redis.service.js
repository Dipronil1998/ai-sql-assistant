const redis = require("../../config/redis");

const { getDatabaseSchema } = require("./schema.service");

const formatSchema = require("./format.service");

const loadSchema = async () => {

    const cache = await redis.get("db_schema");

    if (cache) {
        return cache;
    }

    const schema = await getDatabaseSchema();

    const formatted = formatSchema(schema);

    await redis.set(
        "db_schema",
        formatted,
        "EX",
        3600
    );

    return formatted;
}

module.exports = loadSchema;