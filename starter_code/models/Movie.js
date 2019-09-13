//make schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model('Movie', movieSchema); //creates a lowecase plural movies (mice) collection in your DB 

module.exports = Movie;

