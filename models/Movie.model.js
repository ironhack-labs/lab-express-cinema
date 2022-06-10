
const { Schema, model } = require ('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [],
    image: String,
    showtimes: []
  },
  {
    timestamps: true
  }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;