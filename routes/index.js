const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => {
            // console.log(data)
            res.render('movies', { movies: movies });

            // res.render('movies', {movies: movies}) 
            // {movies: data} con esto hago el foreach
            //'movies' es nombre del hbs
        })
        .catch(error => console.log(error));
})

router.get('/movies/:id', (req, res, next) => {

    Movies
        .findById(req.params.id)
        .then(movie =>
            res.render('moviesDetails', movie))
        .catch((e) => next(e));
})

module.exports = router;