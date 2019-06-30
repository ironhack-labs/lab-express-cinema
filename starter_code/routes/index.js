const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
.then(movies => {
    res.render("movies", {movies: movies}
  )
})
.catch(err => {
  console.log('error: ', err)
})
  
})

router.get('/movie/:movieId', (req, res, next) => {
  let movieId = req.params.movieId
  Movie.findById(movieId)
  .populate()
  .then(movie => {
  res.render("movie-details", {movie: movie})
})
})
module.exports = router;
