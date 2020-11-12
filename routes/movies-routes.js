const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')


// Listado de pelis
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log(err))
})