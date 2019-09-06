const Movie = require('./../models/Movie');

exports.getIndex = (req, res) => {
  res.render('index');
};

exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.render('movies-list', { movies });
};

exports.getMovieDetails = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.render('movie-details', { movie });
};
