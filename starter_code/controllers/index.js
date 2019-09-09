const Movie = require('../models/Movie')

exports.indexView = (req, res) => {
  res.render('index')
}
exports.moviesPage = async (req, res) => {
  const movies = await Movie.find()
  res.render('movies', {
    movies
  })
}
exports.moviesDetails = async (req, res) => {
  const {
    id
  } = req.params
  const movies = await Movie.findById(id)
  res.render('movies-details', movies)
}