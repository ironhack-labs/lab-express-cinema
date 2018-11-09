const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;