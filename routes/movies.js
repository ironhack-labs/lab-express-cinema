const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

//Render all movies
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            res.render('movies', {
                movies: allMovies
            })
        })
        .catch(error => {
            console.log('error al renderizas la página', error);
        })
});

module.exports = router;