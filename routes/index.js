const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find({})
    .then((dbMovies) => {
        console.log(dbMovies)
        res.render('movies', dbMovies)
    })
    .catch( error => console.log('Error when finding movies: ', error))
})

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id;
    Movie.findById(movieId)
    .then((dbMovie) => {
        console.log(dbMovie)
        res.render('details', dbMovie)
    })
    .catch(error => console.log('Error when finding the movie: ', error))
})

module.exports = router;
