const Movie = require('../models/movie.model')

// list movie from file
module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/movies', { movies })
    })
    .catch((error) => next(error))
}

module.exports.detail = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render('movies/detail', { movie })
    })
    .catch((error) => next(error))
}

