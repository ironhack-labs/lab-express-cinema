const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find().then((movies) => {
    res.render('movies', { movies })
  })  
})

router.get('/movie/:movie_id', (req, res) => {
  Movie.findById(req.params.movie_id).then((movie) => {
    res.render('movie', movie)
  })
})

module.exports = router;
