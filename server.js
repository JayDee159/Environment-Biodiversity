const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const externalRoutes = require("./routes/externalRoutes");
app.use("/api/external", externalRoutes);

app.use(cors());
app.use(express.json());

// ===============================
// ROUTES
// ===============================
app.use("/api/animals", require("./routes/animalRoutes"));

// ===============================
mongoose.connect("mongodb://127.0.0.1:27017/bio_bkn")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});