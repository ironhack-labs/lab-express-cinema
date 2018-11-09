const express = require('express');
const router  = express.Router();

const Movie = require('../models/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.send(movies)
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findOne( { _id: req.params.movieId })
    .then(movie => {
      res.send(movie)
    })
    .catch(err => {
      console.log('fueh')
    })
})

module.exports = router;
