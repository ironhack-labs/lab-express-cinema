const mongoose = require("mongoose");  //requires mongoose module for us to use
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array, 
  image: String,
  description: String,
  showtimes: Array
});

// creates a new model "Movie"
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;