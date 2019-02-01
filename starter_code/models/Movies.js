

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const model = new Schema({
  title : String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movie = mongoose.model('nombreColeccions', model);
module.exports = Movie;