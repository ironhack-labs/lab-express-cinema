const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints

// Movies - List
router.get('/', (req, res) => {
  Movie
    .find()
    .then(allMovies => res.render('movies/movies-list', { allMovies }))
    .catch(err => console.error(err))
})

// Movie - Details
router.get('/details/:movieID', (req, res) => {
  Movie
    .findById(req.params.movieID)
    .then(movie => res.render('movies/movie-details', movie))
    .catch(err => console.error(err))
})



module.exports = router
