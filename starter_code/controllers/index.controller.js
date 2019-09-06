const Movies = require('../models/Movies');

exports.homeView = (req, res, next) => {
  res.render('index');
};

exports.getMovies = async (req, res, next) => {
  const movies = await Movies.find();
  res.render('list', { movies });
};

exports.getDetail = async (req, res, next) => {
  const { id } = req.params;
  const movies = await Movies.findById(id);
  res.render('detail', movies);
};