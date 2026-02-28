const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  totalSpeciesAtRisk: Number,
  endangeredCount: Number,
  criticallyEndangeredCount: Number,
  extinctCount: Number,
  lastUpdated: Date
});

module.exports = mongoose.model("BiodiversityStats", statsSchema);