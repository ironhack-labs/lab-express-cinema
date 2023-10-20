const { Movie, model } = require('mongoose');

const userMovie = new Movie(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]    
  }
);

const Movie = model('User', userMovie);

module.exports = Movie;
