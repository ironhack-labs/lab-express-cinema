const express = require('express');
const router  = express.Router();
const Movie = require ("../models/Movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* GET movies on click to the home page */
router.get('/movies', (req, res, next) => {
  Movie.find().then(movies  => {
      res.render("movies.hbs", {movies});
    console.log (movies);
  });
  // res.render("movies.hbs", {movieList:movies});
});

/* GET movie on clicking See more */
/* get movie by Id */

router.get('/movies/:movieId', (req, res) => {
  // req.param.movieId --- request parameter movieId from the object
  Movie.findById(req.param.movieId).then(movie => {
    res.render("detail.hbs", {movie});
  });
});

module.exports = router;
