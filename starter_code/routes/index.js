const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
    res.render('index.hbs');
});

/* GET home page */
router.get('/movies', (req, res) => {
    // get all the books
    // render a 'books' view with the books data

    Movie.find().then(data => {
        res.render('movies.hbs', { moviesList: data });
    });
});

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;

    Movie.findById(movieId).then(data => {
        res.render('movieDetails.hbs', { moviesList: data });
    });
});

module.exports = router;
