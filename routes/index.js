const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    Movie.find()
    .then(movies => {
        res.render('movies', { movies: movies })
    })
});

router.get('/movies/:id', (req, res, next) => {
    console.log(req.params.id);
    Movie.find({ '_id': req.params.id })
    .then(movie => {
        console.log(movie[0]);
        res.render('movie-details', { movie: movie[0] });
    })
})

module.exports = router;
