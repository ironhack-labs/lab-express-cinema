const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movie_schema = new Schema({
  title: String,
  director : String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movies = mongoose.model('Movies', movie_schema);

module.exports = Movies;