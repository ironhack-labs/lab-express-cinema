const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie.find({})
        .then(movies => res.render('movies', { movies: movies }))
        .catch(err => console.log('Error when showing movies', err))
})

router.get('/movies/:id', (req, res) => {
    console.log(req.params.id);
    Movie.findById(req.params.id)
        .then(movie => res.render('movie-info', { movie: movie }))
        .catch(err => console.log('Error when showing movie', err))
})

module.exports = router;
