const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieArray => {
      res.locals.allMovies = movieArray;
      res.render("movies.hbs");
    })
    .catch(err => next(err));
});

router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieInfo = movieDoc;
      res.render("movieInfo.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
