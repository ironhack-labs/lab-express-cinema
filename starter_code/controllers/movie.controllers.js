const Movie = require("../models/Movie");

//controller para traer todas las chevesitas
exports.findMovie = (req, res, next) => {
  Movie.find()
    .then(movies => res.render("movies", { movies }))
    .catch(err => res.render("movies", err));
};
exports.findOneMovie = (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => res.render("movie-detail", movie))
    .catch(err => res.render("movie-detail", err));
};
