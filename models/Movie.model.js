
const moongose = require('mongoose');
const Schema = moongose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

const Movie = moongose.model('Movie', movieSchema);

module.exports = Movie;