

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true } ,
  stars: [String],
  image: { type: String, required: true },
  description: { type: String, required: true },
  showtimes: [String]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
