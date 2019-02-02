const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//Build Movies Schema
const movieSchema = new Schema ({
  title : String,
  director: String,
  stars: [],
  image: String,
description: String,
showtimes: []
})

//Make Movies a mongoose model
const Movie = mongoose.model('Movie', movieSchema);

//Export Movie Module to make it available in other files
module.exports = Movie;


