const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movieResultsDB => {
            console.log(`Retrieved movies from DB:`, movieResultsDB);
            res.render('movies.hbs', { movies: movieResultsDB });
        })
        .catch(error => {
            console.log('Error getting movies from DB: ', error);
            next(error);
        });
});

router.get('/movie/:movieId', (req, res, next) => {
    const { movieId } = req.params
    Movie.findById(movieId)
        .then(movieDetails => {
            console.log(movieDetails);
            res.render('movie-details.hbs', { movie: movieDetails });
        })
        .catch(error => {
            console.log('Error getting movie from DB: ', error);
            next(error);
        });
});
    
    
    
    
    
    
    

module.exports = router;
