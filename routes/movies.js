const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

//Render all movies
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movie => {
            res.render('movies', {
                allMovies: movie
            })
        })
        .catch(error => {
            console.log('error al renderizas la página', error);
        })
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movieDetails => {
            res.render('movieDetails', {
                movie: movieDetails
            })
        })
        .catch(error => {
            console.log('Error al acceder a los detalles de la movie', error);
        })
});

module.exports = router;