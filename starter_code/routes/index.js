const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find().then((movies) => {
    res.render('movies', {movies}) 
  })
})

router.get('/movies/:id', (req, res) => {
  Book.findOne({_id: req.params.id}).then((movie) => {
    res.render('movie', {movie}) 
  })
})

module.exports = router;
