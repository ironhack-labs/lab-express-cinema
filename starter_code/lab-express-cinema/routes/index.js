const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('home');
});
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies })

    })
})
router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie', movie)
    })
})

module.exports = router;
