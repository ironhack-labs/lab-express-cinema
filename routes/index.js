const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    
    MovieModel
        .find()
        .then(movies => {
            res.render('movies', {movies})
            console.log(movies)
        })
        .catch(err => console.log('error inmovies', err))
});

router.get('/movie/:id', (req, res, next) => {
    const id = req.params.id;

    MovieModel 
        .findById(id)
        .then(movie => {
            if (!movie) {
                return res.status(404).send('Movie not foudn'); 
            }
            res.render('movie-details', {movie});
        })
        .catch( err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

module.exports = router;
