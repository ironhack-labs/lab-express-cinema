const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

router.get('/list', (req, res) => {

    Movie.find()
        .then(allMovies => res.render('movies/list', { allMovies }))
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/details/:id', (req, res) => {

    Movie.findById(req.params.id)
        .then(theMovies => res.render('movies/details', theMovies))
        .catch(err => console.log("Error en la BBDD", err))
})

module.exports = router;