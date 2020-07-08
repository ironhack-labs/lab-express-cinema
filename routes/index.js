const Movie = require('../models/Movie.model');

const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {

    Movie.find({})
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(e => console.log('Error when searching the movies'))
});

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id, req.body)
        .then(movie => {
            console.log(movie)
            res.render('movie', movie)
        })
        .catch(error => console.log(`Error when finding the movie`))
});

module.exports = router;
