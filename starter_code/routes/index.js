const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            // console.log(allMoviesFromDB);
            res.render('movies', { movies: allMoviesFromDB });
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);
        })
});
router.get('/movies/:movieId', (req, res, next) => {
    let movieId = req.params.movieId;
    if (!/^[0-9a-fA-F]{24}$/.test(movieId)) {
        return res.status(404).render('not-found');
    }
    Movie.findOne({ '_id': movieId })
        .then(movie => {
            console.log(movie.star);
            if (!movie) {
                return res.status(404).render('not-found');
            }
            res.render("movies-profile", { movie })
        })
        .catch(next)
});

module.exports = router;