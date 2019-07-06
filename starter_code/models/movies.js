const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title : {type: String, required: true},
  director: {type: String, required: true},
  stars: {type: Array, default: undefined},
  image: {type: String, default: 'images/no-img.jpg'},
  description: String,
  showtimes: {type: Array, default: undefined},
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;