const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  description: String,
  stars: Array,
  image: String,
  description: String,
  showtime: Array
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;