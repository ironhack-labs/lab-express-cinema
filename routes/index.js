const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find({})
    .then((moviesFromDB) => res.render('movies', { moviesFromDB } ))
    .catch((error) => `Error fetching movies: ${error}`)
});

router.get('/movies/:id', (req, res, next) => {

    Movie.findById(req.params.id)
    .then((movieDetails) => res.render('movies-detail',  movieDetails  ))
    .catch((error) => `Error fetching movies: ${error}`)
});
module.exports = router;
