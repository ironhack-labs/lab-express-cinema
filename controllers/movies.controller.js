const Movie = require("../models/movies.model");
const mongoose = require("mongoose");

module.exports.home = (req, res) => {
    res.render('movies/home')
  } ;

  module.exports.list = (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render("movies/list", { movies });
      })
      .catch(next);
  };