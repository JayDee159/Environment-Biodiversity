const express = require("express");
const axios = require("axios");

const router = express.Router();

// 🌍 Get live species occurrences from GBIF
router.get("/gbif", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.gbif.org/v1/occurrence/search?limit=20&country=IN"
    );

    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: "GBIF fetch failed" });
  }
});

module.exports = router;