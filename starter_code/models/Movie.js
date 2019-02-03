// mongoose

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const moviesModel = mongoose.model('Movies', movieSchema);

module.exports = moviesModel;
