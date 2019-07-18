const express = require('express');
const router  = express.Router();
const movies  = require('../models/movies')

/* GET home page */
router.get(['/home', "/"], (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movies.find({})
  .then((movies)=> {
    res.render('movies', {movies});
  })
});

router.get('/movie', (req, res, next) => {
  const movieId = req.query.id;
  movies.findById(movieId, function (err, adventure) {})
  .then((movie)=> {
  res.render('movie', {movie});
  console.log(movie)
  // movies.findById(movieId, (err, movie) => {
  //   if (err) { return next(err); }
  //   res.render('movie', { movie: movie });
  // });
  
  })
});

module.exports = router;
