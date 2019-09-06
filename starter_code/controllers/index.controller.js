const Movie = require('../models/Movie')

exports.indexView = (req, res, next) => {
  res.render('index')
}

exports.moviesList = async (req, res, next) => {
  const movies = await Movie.find()
  res.render('moviesList', { movies })
}

exports.movieSingle = async (req, res, next) => {
  const { id } = req.params
  const movie = await Movie.findById(id)
  res.render('movieSingle', movie)
}
