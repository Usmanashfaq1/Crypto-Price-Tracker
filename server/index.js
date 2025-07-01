const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.COINGECKO_API_KEY;

app.get("/api/coins", async (req, res) => {
  try {
    const response = await fetch(
      "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
          "User-Agent": "crypto-price-tracker",
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
