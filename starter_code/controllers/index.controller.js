const Movie = require('../models/Movie');

exports.indexView = (req, res, next) => {
  res.render('index');
};

exports.moviesGet = async (req, res, next) => {
  const movies = await Movie.find();
  res.render('movies', { movies });
};

exports.movieDetail = async (req, res, next) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  res.render('movie-details', movie);
};