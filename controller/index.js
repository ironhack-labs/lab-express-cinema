const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => res.render("movies", { movies }))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        next(createError(404, "Movie not found"));
      } else {
        res.render("details", { movie });
      }
    })
    .catch((error) => next(error));
};
