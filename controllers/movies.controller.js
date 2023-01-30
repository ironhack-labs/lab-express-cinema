const Movie = require('../models/movie.model')

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies/list.hbs', { movies })
      console.log(movies)
    })
    .catch((error) => next(error))
};


module.exports.detail = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movies) => {
      console.log(movies)
      res.render('commons/detail.hbs', { movie: movies, stars: movies.stars, shows: movies.showtimes })
    })
    .catch((error) => next(error))
}