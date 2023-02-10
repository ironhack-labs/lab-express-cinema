const express = require('express')
const router = express.Router()

// Models
const Movie = require('./../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(error => console.log('Error:', error))
})

router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params
    Movie
        .findById(movieId)
        .then(movie => {
            res.render('movie-details', movie)
        })
        .catch(error => console.log('Error:', error))
})


module.exports = router
