
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

const Movie = mongoose.model('Movie', movSchema);

module.exports = Movie;