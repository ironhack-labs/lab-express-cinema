const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies', (req, res) => {
    
    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(movie => {
        res.render('movies-view', {movie: movie})
        })
        .catch(err => console.log(err))
})

router.get('/movies/:movieId', (req, res) => {
    
    const {movieId} = req.params
    
    Movie
        .findById(movieId)
        .select({ title: 1, image: 1, description: 1, director: 1, stars: 1, showtimes: 1})
        .then(movie => {
            console.log(movie)
        res.render('movie-data-view', {movie: movie})
        })
        .catch(err => console.log(err))
})

module.exports = router;
