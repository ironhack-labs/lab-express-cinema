const express = require('express')
const router = express.Router()
const hbs = require('hbs')
const path = require('path')

hbs.registerPartials(path.join(__dirname, 'views', 'partials'))

const Movie = require('../models/movie-model')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies/movies', { movies }))
    .catch(err => console.log("An error ocurred:", err))
})

router.get('/details/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => res.render('movies/movie-details', movie))
    .catch(err => console.log("An error ocurred:", err))
})

module.exports = router