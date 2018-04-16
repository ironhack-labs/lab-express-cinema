const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {type: String, required: true},
    director: {type: String},
    image: {type: String},
    stars: {type: Array},
    description: {type: String},
    showtimes: {type: [String]},
  },
  {
    timestamps: true,
  }
);

// create the "Movie" model for the "movies" collecion on mongoDB
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
