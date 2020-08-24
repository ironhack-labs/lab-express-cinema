const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
//Adding here the router for /movies
router.get('/movies', (req, res, next) => {
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
module.exports = router;
