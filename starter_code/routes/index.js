const express = require('express')
const router = express.Router()
const Movie = require('../models/movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies })
    })
    .catch((err) => {
      console.log('Error while getting the movies from the DB: ', err)
    })
})

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then((movie) => {
    console.log("movie: ", movie)
    res.render("movie-details", movie)
  }).catch((err) => {
    console.log('Error while getting a specific movie from the DB: ', err)
  });
})

module.exports = router
