const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: { type: Array, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  showtimes: { type: Array, required: true },
});

module.exports = model("Movie", movieSchema);
