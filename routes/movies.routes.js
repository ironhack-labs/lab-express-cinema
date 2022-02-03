const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

// listado de pelis
router.get('/listado', (req, res) => {
    Movie
        .find()
        .then(movies => res.render('movies/list', { movies }))
        .catch(err => console.log(err))
})

// detalles de pelicula
router.get('/:movie_id', (req, res) => {

    // el nombre que le damos tiene que coincidir con el del parámetro en el endPoint
    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(foundMovie => res.render('movies/single-movie', foundMovie))
        .catch(err => console.log(err))
})

module.exports = router