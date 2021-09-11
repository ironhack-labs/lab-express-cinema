const express = require("express");
const router = express.Router();
const modelMovie = require("../models/movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  modelMovie
    .find()
    .then((allMovies) => {
      res.render("movies", { movies: allMovies });
    })
    .catch(err);
  next(error);
});
router.get("/:id", (req, re, next) => {
  modelMovie
    .findById(req.params.id)
    .then((idMovie) => {
      res.render("movie-card", { oneMovie: idMovie });
    })
    .catch();
});

module.exports = router;
