const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find({}).then(movies => {
    console.log(movies)
    res.render('movies', {movies});
  });
});

/* GET themovies:id page */
router.get('/themovie/:id', (req, res) => {

  Movie.findById({_id: req.params.id})
  .then(movies => {
    console.log(movies)
    res.render('themovie',{movies});
  });
});

module.exports = router;

