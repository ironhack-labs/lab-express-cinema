const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/movies', (req, res) => {
    // get all the movies
    Movie.find().then(movies => {
        // render a 'movies' view with the movies data
        res.render('movies', { moviesList: movies });
    })
});

router.get('/movies/:movieId', (req,res) => {
    const movieId = req.params.movieId
    Movie.findById(movieId).then(movie => {
        res.render('movieDetails', {movie: movie})
    })
})

module.exports = router