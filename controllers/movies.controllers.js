const Movie = require("../models/Movie.model");
const mongoose = require("mongoose");

module.exports.list = (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((error) => {
      next(error);
    });
};
module.exports.detail = (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      console.debug(`esto es movie ${movie}`);
      res.render("details", { movie });
    })
    .catch((error) => next(error));
};
