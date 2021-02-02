require("../configs/db.config");
const Movie = require("../models/Movie.model");

var data = require('../public/data');
const movies = data.movies

console.log(movies)

Movie.create(movies)
  .then(movie => console.log('All movies added'))
  .catch(error => console.log('An error happened while saving a movie', error))
