const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


//const movies = require('../bin/seeds.js');


const movieSchema = new Schema ({
  title: String, 
  director: String, 
  stars: {
    type: Array
  },
  image: String,
  description: String, 
  showtimes: {
    type: Array
  },
}) 

module.exports = movieSchema;
