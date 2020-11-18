const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: [] },
  image: { type: String },
  description: { type: [] },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
