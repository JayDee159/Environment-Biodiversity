
const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    required: true
  },
  habitat: {
    type: String,
    required: true
  },
  conservationStatus: {
    type: String,
    enum: ["Least Concern", "Vulnerable", "Endangered", "Critically Endangered"],
    required: true
  },
  population: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Species", speciesSchema);
