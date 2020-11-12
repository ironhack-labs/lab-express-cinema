const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* All movies page */
router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('movies', { movies: allMovies })
            console.log(allMovies)
        })
        .catch(err => console.log(err))   
})

module.exports = router;
