const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
