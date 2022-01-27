// models/Book.model.js
const { Schema, model } = require('mongoose');
const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image:{
        type: String,
        default:'/public/images/default-movie.jpg'
    },
    description:String,
    showtimes: [String]
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);