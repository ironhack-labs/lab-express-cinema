const express = require('express');
const router = express.Router();

const Movies = require('../models/movie.model');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Iteration 3 -- get movies page
router.get('/movies', (req, res) => {
  Movies.find()
    .select('title image')
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(err => console.log('error ocurred while rendering movies', err));
});

// Iteration 4 display movie details

router.get('/movie/:movie_id', (req, res) => {
  const movieId = req.params.movie_id;

  Movies.findById(movieId)
    .then(movie => res.render('movie', { movie }))
    .catch(err => console.log('error ocurred while rendering single Movie', err));
});

module.exports = router;
