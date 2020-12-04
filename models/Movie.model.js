const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    stars : [String],
    image: String, 
    showtimes : [String]
  }
);
 
module.exports = model('Movie', moviesSchema);