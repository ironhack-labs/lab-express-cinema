const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies-page", (req, res, next) => {
  Movie.find()
    .then(moviesResults => {
      console.log("Check those movies Broooooo");
      res.locals.moviesAvailable = moviesResults;
      res.render("movies-page.hbs");
    })
    .catch(err => next(err));
});

router.get("/oneMovie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movieData => {
      res.locals.oneMovie = movieData;
      res.render("oneMovie.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
