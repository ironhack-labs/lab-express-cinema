const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  image: String,  
  title: String,
  director: String,
  stars: Array,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;