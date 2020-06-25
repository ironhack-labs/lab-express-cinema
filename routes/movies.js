const express = require('express');
const Movie = require('../Models/Movie.model');
const router = express.Router();



router.get('/', (req, res) => {
    Movie.find({})
    .then(movies => {
        console.log(movies)
        res.render('movies', {movies: movies})
    })
    .catch(err => console.log('Error while looking for movies: ', err))
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('details', {movie: movie});
    })
    .catch(err => console.log(`Error while searching for movie detalis: `, err))
});

module.exports= router;