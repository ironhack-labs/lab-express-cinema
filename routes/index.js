const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(moviesArray => res.render("movies", { movies: moviesArray }))
        .catch(error => console.error('Error connecting to the database', error));
})

router.get('/movies/:id', (req, res) => {
    const {id} = req.params
    Movie
        .findById(id)
        .then(movieReceived => res.render("movie-result", { movieReceived }))
        .catch(error => console.error('Error connecting to the database', error));
})
module.exports = router;
