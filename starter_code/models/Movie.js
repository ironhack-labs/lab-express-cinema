const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
  description: String,
  author: String,
  rating: Number

});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;