const Movie = require('../models/movie.model')

module.exports.list = (req, res,next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies)
    })
    .catch((error) => next(error))
};