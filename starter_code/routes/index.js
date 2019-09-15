const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies: movies })
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error)
    })
})

router.get('/movies/:MovieId', (req, res, next) => {
  console.log(req.params.MovieId)
  Movie.findById({ _id: req.params.MovieId })
    .then(movie => {
      res.render('movies-details', { movie: movie })
    })
    .catch(error => {
      console.log('Error while getting the movie detail from the DB: ', error)
    })
})

module.exports = router
