const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')


router.get('/', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
    Movie.find()                                                         // ESTO ES EL MODELO
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies', { movies: allMovies })
        })  // ESTO ES LA VISTA
        .catch(error => console.log(error))
})

router.get('/:_id', (req, res) => {

    const id = req.params._id
    console.log(id)
    Movie.findById(id)
        .then(theMovie => res.render('movie-detail', { movies: theMovie }))
        .catch(error => console.log(error))
})


module.exports = router