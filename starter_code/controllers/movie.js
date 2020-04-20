const Movie = require('../models/Movie')

exports.listView = async (req, res) => {
  const movies = await Movie.find()
  console.log(movies)
  res.render('movie/movies', { movies })
}

exports.detailView = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render("movie/detailMovie", movie);
};
