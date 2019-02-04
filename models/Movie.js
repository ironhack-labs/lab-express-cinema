const mongoose = require('mongoose');
const movieShema = new mongoose.Schema({
  title : String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});
const movie = mongoose.model('Movie', movieShema);


module.exports = movie;
