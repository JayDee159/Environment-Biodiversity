const express = require("express");
const router = express.Router();
const Animal = require("../models/Animal");

// ===============================
// GET ALL ANIMALS
// ===============================
router.get("/", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===============================
// GET SINGLE ANIMAL BY ID
// ===============================
router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);

    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }

    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;