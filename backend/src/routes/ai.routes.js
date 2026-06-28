const express = require("express");
const router = express.Router();

const { generateQuery } = require("../controllers/ai.controller");

router.post("/ask", generateQuery);

module.exports = router;