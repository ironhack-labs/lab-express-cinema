const Movie = require('../models/Movie.model')

// List of movies
module.exports.list = (req, res, next) => {
  const { title } = req.query

  Movie.find(title)
    .then(movies => {
      //console.log(movies)
      res.render('movies', { movies })
    })
}

// Detail of one movie selected
module.exports.detail = (req, res, next) => {
  const { id } = req.params

  Movie.findById(id)
    .then(movie => {
      console.log(movie);
      res.render('movieDetail', { movie })
    })
}