const Movie = require('../models/Movie.model');

module.exports.listMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('index', { movies: movies });
    })
    .catch(e => console.error(e))
}

module.exports.getMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => res.render('movie', { movie: movie }))
    .catch(e => console.error(e))
}

module.exports.index = (req, res, next) => {
    res.render("index");
  };