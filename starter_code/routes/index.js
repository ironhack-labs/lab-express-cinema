const express = require('express');
const router  = express.Router();
const Movie = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => {
    console.log(movies)
    let result = movies;
    res.render("movies", { result });
  });
});

router.get("/movie/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then(movie => {
    console.log(movie);
    let result = movie;
    res.render("movie", { result });
  });
});

module.exports = router;
