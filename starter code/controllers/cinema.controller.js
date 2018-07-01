const mongoose = require('mongoose');
const MovieModel = require('../models/cinema.model');

module.exports.list = (req, res, next) => {
    MovieModel.find()
    .then(movies => {
      res.render('movies', {movies} )
    })
    .catch(error => {
      next(error);
    });
}

module.exports.show = (req, res, next) => {
  const movieId = req.params.id;
  MovieModel.findById(movieId)
  .then(movie => {
    res.render('movie', {movie})
  })
  .catch(error => {
    next(error);
  });
}