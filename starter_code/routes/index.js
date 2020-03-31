const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then( moviesData => {
    console.log(moviesData)
    res.render('movies', {moviesData});
    })
    .catch( error => console.log(error))
});

/* GET single movie page */
router.get('/movie/:id', (req, res, next) => {
  
  const { id } = req.params;

  Movie.find({_id: id})
    .then( moviesData => {
    console.log(moviesData)
    res.render('showtimes', {moviesData});
    })
    .catch( error => console.log(error))
});

module.exports = router;

