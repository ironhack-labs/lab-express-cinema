const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => {
    Movie.find({})
    .then(movies => {
        console.log(movies);
        res.render('movies', {movies: movies});
    })
    .catch(err => console.log('Error while looking for movies: ', err));
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('details', {movie: movie});
    })
    .catch(err => console.log(`Error while searching for movie detalis: `, err))
});

module.exports= router;