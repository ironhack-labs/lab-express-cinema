const express = require('express');
const router  = express.Router();
const movie = require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  const allMovies = movie.getAllMovies();
  res.render('movies', {movies: allMovies});
});

router.get('/movies/:title', (req, res, next) => {
  const title = req.params.title;
  const titleMovie= movie.getMovieByTitle(title);
  console.log(titleMovie);
  res.render('moviedetails', {movie: [titleMovie]});
});



module.exports = router;
