const Movie = require('../models/movie.model')

// list movie from file
module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movie) => {
      console.log('11111111111', movie);
      res.render('common/movies', { movie })
    })
    .catch((error) => next(error))
}