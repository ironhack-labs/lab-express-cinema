const Movie = require('../models/movie.model')

module.exports.list = (req, res,next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/list.hbs', { movies })
      console.log(movies)
    })
    .catch((error) => next(error))
};