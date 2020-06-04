const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Get movies page
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies/movies', { movies: allMovies });

        })
        .catch(error => {
            console.log('No encuentra pelicula', error);
        })

});

router.get('/movies/show', (req, res, next) => {
    Movie.findById(req.query._id)
        .then(movie => {
            res.render('movies/details', { movie: movie });

        })
        .catch(error => {
            console.log('No encuentra datos de la pelicula', error);
        })

});



module.exports = router;
