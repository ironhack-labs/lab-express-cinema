const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')

router.get('/movies-list', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies/movies-list', {
            movies: allMovies
        }))
        .catch(err => console.log("Error consulta las pelis en la BBDD: ", err))
})

router.get('/details/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(theMovie => res.render('movies/movie-details', {
            movies: theMovie
        }))
        .catch(err => console.log("Error consultadno la peli  en la BBDD: ", err))
})

module.exports = router