const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// based on structure in seeds.js
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
