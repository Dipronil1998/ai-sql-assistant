const redis = require("../../config/redis");

const get = async (key) => {
    const value = await redis.get(key);
    return value ? JSON.parse(value) : null;
};

const set = async (key, value, ttl = 3600) => {
    await redis.set(key, JSON.stringify(value), {
        EX: ttl,
    });
};

module.exports = {
    get,
    set,
};