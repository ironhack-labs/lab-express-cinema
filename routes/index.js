const express = require('express');
const {
    get
} = require('mongoose');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');

});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(moviesDB => {
            res.render('movies', {
                movies: moviesDB
            });
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);
        })
});


// movie-details

router.get('/movies/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findById({
            _id: movieId,
        })
        .then((theMovie) => {
            res.render('movie-details', {
                movie: theMovie
            });
        })
        .catch((error) => {
            console.log('Error while retrieving movies details:', error)
            next(error)
        })
})



module.exports = router;