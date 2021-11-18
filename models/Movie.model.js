const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

// mongoose will turn "Recipe" into the collection "recipes"
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
