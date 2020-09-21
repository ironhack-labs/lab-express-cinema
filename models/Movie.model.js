const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
