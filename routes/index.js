const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
        .then(movies => {
            console.log('Movies', movies);
            res.render('movies', { movies });
        })
        .catch(err => console.log(err));
});

router.get("/movie/:id", (req, res, next) => {
    const movieId = req.params.id
    Movies.findById(movieId)
        .then(movie => {
            console.log('Movie', movie.title);
            res.render('movie', { movie });
        })
        .catch(err => console.log(err));
});

module.exports = router;
