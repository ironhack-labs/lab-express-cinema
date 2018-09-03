const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(data => {
      console.log(data);

      res.locals.movieArray = data;
      res.render("movies.hbs");
    })
    .catch(err => next(err));
});

router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then(movieDoc => {
      res.locals.movieItem = movieDoc;
      res.render("movie-info.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
