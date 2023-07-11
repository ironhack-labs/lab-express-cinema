const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.models');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    
    Movie.find()
        .then((movie) => {
            console.log(Movie)
            res.render('movies', {movies: movie} );
        })
        .catch((error) => {
            console.log(error)
        });
    //res.send("Hola Mundo")
});


router.get('/movies/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
        .then((movie) => {
            res.render('movie-details', { movie });
        })
        .catch((error) => {
            console.log('Error while retrieving movie details: ', error);
        });
});



module.exports = router;
