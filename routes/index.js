const express = require('express');
const router = express.Router();
//IT-3
const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//IT-3
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMoviesFromDB => {
            res.render('movies.hbs', {
                movies: allMoviesFromDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying the movies', err)
            next(err)
        })
})

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(thisMovieDB => {
            res.render('show.hbs', {
                thisMovie: thisMovieDB
            })
        })
        .catch((err) => {
            console.log('Error while displaying the specific movie', err)
        })
})

module.exports = router;