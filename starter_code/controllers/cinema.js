const Movie = require('../models/Movie')

exports.listMovies = async (req, res) => {
  const allMovies = await Movie.find()
  res.render('movies', { allMovies })
}

exports.detailView = async (req, res) => {
  const oneMovie = await Movie.findById(req.params.id)
  console.log(oneMovie.showtimes)
  res.render('detail',  oneMovie )
}