const Movie = require("../models/Movie");

exports.findMovies = (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies-list", { movies });
    })
    .catch(err => res.render("movies-list", err));
};

exports.findOneMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render("single-movie", movie))
    .catch(err => res.render("single-movie", err));
};
