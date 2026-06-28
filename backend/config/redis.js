const { createClient } = require("redis");

const client = createClient({
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

client.on("error", console.error);

(async () => {
    await client.connect();
})();

module.exports = client;