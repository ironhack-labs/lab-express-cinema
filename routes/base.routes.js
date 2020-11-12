const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movieList => {
            console.log('Las películas son: ', movieList.title)
            res.render('movies', { movieList })
        })
        .catch(err => console.log('HAY UN ERROR CON MOVIES: ', err))

})


router.get('/movies/:movieId', (req, res) => {

    Movie
        .findById(req.params.movieId)
        .then(movieDetails => {

            console.log('La info de la peli es:', movieDetails)
            res.render('movie-details', movieDetails)
        })
        .catch(err => console.log('ERROR AL MOSTRAR LA PELÍCULA', err))

})


module.exports = router;
