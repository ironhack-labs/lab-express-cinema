const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find().then((movies) => {
    // console.log(movies);
    res.render('movies',{movie: movies});
  })
});

router.get('/movie/:movieId', (req, res, next) => {
  Movie.findOne({_id:req.params.movieId}).then((movie) => {
    console.log(movie);
    res.render('movie',{movie: movie});
  })
});


module.exports = router;
