const Movies = require('../models/Movies')

//controller to bring all beers
exports.findMovies = (req, res, next) => {
  Movies.find()
    .then(movies => {
      res.render('movie-list', { movies })
    })
    .catch(err => res.render('movie-list', err))
}
exports.findOneMovie = (req, res, next) => {
  const { id } = req.params
  Movies.findById(id)
    .then(movie => res.render('movie-detail', movie))
    .catch(err => res.render('movie-detail', err))
}
