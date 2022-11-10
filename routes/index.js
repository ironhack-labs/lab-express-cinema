const express = require('express');
const Movie = require('../models/Movies.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))

})

router.get('/movies/movies-details/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(moviesFromDB => {
            res.render('movies-details', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})

module.exports = router;
