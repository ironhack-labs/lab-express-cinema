const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies', {movies}))
        .catch(err => console.log('Error en la BBDD', err))
})

router.get('/movies/movie-details/:movieId', (req, res) => {

    Movie.findById(req.params.movieId)

        .then(movie => res.render('movie-details', movie))
        .catch(err => console.log('Error en la BBDD', err))
        
})





module.exports = router;
