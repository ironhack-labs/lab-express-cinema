const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Object,
  image: String,
  description: String,
  showtimes: Object
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;