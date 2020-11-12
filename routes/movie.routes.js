const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints


// Movie list
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/movies-list', { allMovies }))
        .catch(err => console.log(err))
})


// Movie Details
router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/details', theMovie))
        .catch(err => console.log(err))
})


module.exports = router