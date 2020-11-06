// models/Book.model.js
 
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    description: String,
    stars: Array, // [String]
    image: String,
    showtimes: Array // [String]
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Movie', movieSchema);