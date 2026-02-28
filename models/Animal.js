const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  scientificName: { type: String, required: true },
  country: { type: String },            // India / Global
  region: { type: String },             // Western Ghats, Arctic, etc.
  category: { type: String },           // Mammal, Bird, Reptile, Insect
  habitat: { type: String },
  diet: { type: String },
  lifespan: { type: String },
  conservationStatus: { type: String }, // Endangered, Critically Endangered
  population: { type: Number },
  populationTrend: { type: String },    // Increasing / Decreasing / Stable
  threats: [String],                    // Array of threats
  protectedAreas: [String],             // National parks
  idealTemperature: { type: String },
  rainfallRequirement: { type: String },
  altitudeRange: { type: String },
  extinctionYear: { type: Number },     // For extinct species
  description: { type: String },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Animal", animalSchema);