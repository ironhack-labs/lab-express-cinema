const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model');


// Endpoints


// // Listado de peliculas
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            res.render('movies', { allMovies })
        })

        .catch(err => console.log(err))
})




// Detalle de peliculas
router.get('/:id', (req, res) => {

    const movieId = req.params.id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('detail', theMovie))
    
        .catch (err => console.log(err))
})


module.exports = router