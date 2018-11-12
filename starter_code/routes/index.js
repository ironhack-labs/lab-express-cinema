const express = require('express');
const Movie = require("../models/Movie");
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movieResults => {
      res.locals.movieResults = movieResults;
      res.render("movies.hbs");
    })
    .catch(err => next(err));
});

router.get("/movie/:movieId", (req, res, next) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
    .then(document => {
      res.locals.movie = document;
      res.render("movie-details.hbs");
    })
    .catch(err => next(err));
})

module.exports = router;
