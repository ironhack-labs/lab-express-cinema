const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log('Las peliculas a mostrar: ' + movies);
            res.render('movies', { movies });
    })
});

router.get('/movie/:id', (req, res, next) => {
    const { id } = req.params
    Movie.findById(id)
        .then(movie => {
            console.log('La pelicula es: ' + movie);
            res.render('details', { movie });
    })
});

module.exports = router;
