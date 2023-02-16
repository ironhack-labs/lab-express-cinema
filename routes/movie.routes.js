const router = require('express').Router();
const Movie = require('../models/Movie.model.js');

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((allMovies) => {
        res.render('movies.hbs', {allMovies});
        })
        .catch((err) => {
        console.log(err);
        });
    }
);

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
        res.render('movie-details.hbs', {movie});
        })
        .catch((err) => {
        console.log(err);
        });
    }
);

module.exports = router;