const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.COINGECKO_API_KEY;

app.get("/api/coins", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "User-Agent": "crypto-tracker-server",
          Accept: "application/json",
        },
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
        timeout: 5000, // ⏱ optional: fail after 5 seconds
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("API request failed:", error.message);

    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
