const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {type: String},
  director: {type: String},
  stars: {type: []},
  image: {type: String},
  description: {type: String},
  showtimes: {type: []}
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;