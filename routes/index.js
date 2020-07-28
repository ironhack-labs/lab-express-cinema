const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movies.find()
        .then(allTheMoviesFromDB => {
            console.log('retieved movies: ', allTheMoviesFromDB);
            res.render('movies', {
                movies: allTheMoviesFromDB
            })
        })
        .catch(error => {
            console.log('Error getting the movies', error)
        })
})

router.get('/:id', (req, res, next) => {
    const movieId = req.params.id;
    Movies.findById(movieId)
        .then(theMovie => {
            res.render('movie-info', {
                movie: theMovie
            });
        })
        .catch(error => {
            console.log('Error while retrieving movie details: ', error)
        })
});
module.exports = router;