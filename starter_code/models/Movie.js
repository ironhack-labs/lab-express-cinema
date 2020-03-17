//Iteration 1
//models/Movie.js --> Movie model
//bin/seeds.js --> DB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema (
  {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;