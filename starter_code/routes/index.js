const express = require("express");
const Movie = require("../models/Movie.js");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .sort({ rating: -1 })
    .then(movieResults => {
      // send the database query results
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    // next(err) skips to the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
