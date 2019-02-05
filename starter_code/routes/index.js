const express = require("express");
const Movie = require("../models/Movie.js");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;

// x list of movies after clicking "check the movies"
router.get("/movies", (req, res, next) => {
  Movie.find()
    .sort({ title: 1 })
    .then(movieResults => {
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    .catch(err => next(err));
});

// after clicking "see more"
router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movie-detail.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});
