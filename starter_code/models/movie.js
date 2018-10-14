const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema= new Schema({
  title: String,
  director: String,
  starts: Array,
  image: String,
  description: String,
  showtimes: Array,
})

const Movie = mongoose.model ("Movie", moviesSchema)
module.exports= Movie;