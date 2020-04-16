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
      console.log('movies: ', movies)
      res.render('movies', { movies })
    })
    .catch((err) => {
      console.log('Error while getting the movies from the DB: ', err)
    })
})

module.exports = router
