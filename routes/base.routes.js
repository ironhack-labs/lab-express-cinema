const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')


// Endpoints
router.get('/', (req, res) => res.render('index'))


router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(moviesList => {
            console.log('The movies are:', moviesList.name)
            res.render('movies', { moviesList })
        })
        .catch(err => console.log('There was an error with the movies array', err))
})


router.get('/movies/:movieId', (req, res) => {
    Movie
        .findById(req.params.movieId)
        .then(movieInfo => {
            console.log('The movie is:', movieInfo)
            res.render('movie-details', movieInfo)
        })
    .catch(err => console.log('There was an error with the movie ID', err))
})


module.exports = router
