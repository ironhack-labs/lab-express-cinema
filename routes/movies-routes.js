const express = require('express')
const router = express.Router()

const Movie = require('../model/movie.model')


router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies', { allMovies }))
})


router.get('/details/:movies_id', (req, res) => {

    const movieId = req.params.movies_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('details', theMovie))
        .catch(err => console.log(err))
})


module.exports = router