const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
//Adding here the router for /movies
router.get('/movies', (req, res) => {
    Movies.find()
        .then(allTheMoviesFromDB => {
            console.log('Retrieved movies: ', allTheMoviesFromDB);
            res.render('movies', {
                movies: allTheMoviesFromDB
            });
        })
        .catch(error => {
            console.log('Error getting the movies from the DB ', error);
        });
})

/* GET movie details page */
router.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    Movies.findById(movieId)
        .then(allTheMoviesFromDB => {
            console.log('ID: ', allTheMoviesFromDB);
            res.render('movie-info', {
                movieinfo: allTheMoviesFromDB
            });
        })
        .catch(error => {
            console.log('Error getting the movies info from the DB ', error);
        });
})
module.exports = router;
