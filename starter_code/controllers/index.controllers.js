const Movie = require('./../models/Movie')

//-------- MOVIES ---------
exports.viewMovies = async (req, res, next) => {
  const movies = await Movie.find()
  console.log(movies)
  res.render('movies', { movies })
}

exports.viewMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id)
  console.log(movie)
  res.render('movie', movie)
}
