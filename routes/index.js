const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies/movies', {
                movies: allMovies
            })
        })
        .catch(err => console.log(`An error has occurred when while searching for the movies: ${err}`))
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(detailsMovie => {
            console.log(detailsMovie)
            res.render('movies/details', {
                detailsMovie: detailsMovie
            })
        })
        .catch(err => console.log(`Error trying to retrive the movie: ${err}`))
})

module.exports = router;