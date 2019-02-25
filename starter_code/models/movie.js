const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: Array,
  rating: Number,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;