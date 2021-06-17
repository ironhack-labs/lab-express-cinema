const Movie = require("../models/Movie.model");

module.exports.home = (req, res, next) => {
  res.render("index");
};

module.exports.listMovies = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((e) => console.error(e));
};

module.exports.getMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => res.render("movie", { movie }))
    .catch((e) => console.error(e));
};
