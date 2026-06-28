require("dotenv").config();

const app = require("./app");
const pool = require("../config/db");

const PORT = process.env.PORT || 8000;

async function startServer() {
    try {
        // Test database connection
        const connection = await pool.getConnection();
        console.log("✅ DB Connected");
        connection.release();

        app.listen(PORT, () => {
            console.log(`🚀 Server started on ${PORT}`);
        });

    } catch (error) {
        console.error("❌ Database connection failed");
        console.error(error.message);
        process.exit(1);
    }
}

startServer();