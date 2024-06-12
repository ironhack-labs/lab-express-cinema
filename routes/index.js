const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model'); // <== add this line before your routes

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {

    Movie.find()
    .then(allTheMoviesFromDB => {
        res.render('movies', {movies: allTheMoviesFromDB})
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next(error);
    });
    
});

/* GET movie page */
router.get('/movie/:id', (req, res, next) => {

    Movie.findById(req.params.id)
    .then(MovieFromDB => {
        res.render('movie', {movie: MovieFromDB})
    })
    .catch(error => {
      console.log('Error while getting the movie from the DB: ', error);
      next(error);
    });
    
});

module.exports = router;
