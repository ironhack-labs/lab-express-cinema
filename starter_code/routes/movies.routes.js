const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')

router.get('/', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies', {
            movies: allMovies
        }))
        .catch(err => console.log(" Error procedente de la DB: ", err))
})

router.get('/details/:MovieId', (req, res) => {

    const MovieId = req.params.MovieId

    Movie.findById(MovieId)
        .then(theMovie => res.render('movie-details', theMovie))
        .catch(err => console.log("Error procedente de la DB: ", err))
})

module.exports = router