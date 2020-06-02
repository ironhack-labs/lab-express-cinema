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
})

module.exports= router;