const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = {
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
};

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
