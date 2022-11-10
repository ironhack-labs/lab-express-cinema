const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model.js')

/* GET home page */

router.get('/', (req, res, next) => res.render('index'));


router.get('/pelis/listado', (req, res) => {
    Movie
        .find()
        .then(moviesFromDB => {
            res.render('movies/list', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})



router.get('/pelis/detalles/:movieId', (req, res) => {
    const { movieId } = req.params

    Movie
        .findById(movieId)
        .then(moviesFromDB => {
            res.render('movies/details', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})

module.exports = router;