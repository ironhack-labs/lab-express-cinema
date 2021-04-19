const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: Array },
  image: { type: String },
  description: { tyoe: String },
  showtimes: { type: Array }
  }, { timestamps: true }
);

module.exports = model("movies", movieSchema);