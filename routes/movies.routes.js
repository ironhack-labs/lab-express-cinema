const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/', (req, res) => {

    Movie.find()
        .then(allMovies => res.render('movies', {allMovies}))
        .catch(err => console.log('ERROR:', err))
})
router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movie-details', theMovie))
        .catch(err => console.log(err))
})

module.exports = router
