const Movie = require('../models/Movie')

exports.listMovies = async (req, res) => {
  const moviesView = await Movie.find()
  res.render('movies', { moviesView })
}

exports.details = async (req, res) => {
  const detailsMovie = await Movie.findById(req.params.id)
  res.render('detail', { detailsMovie })
}
