const express = require('express');
const Movie = require('./../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//main page
router.get('/peliculas/listadas', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('movies/list-page', { movies: movies }))
        .catch(err => console.log(err))
})
router.get('/movies/movie-by-id/:movie_id', (req, res) => {
    const { movie_id } = req.params
    console.log(movie_id)
    Movie
        .findById(movie_id)
        .then(movies => res.send('movies/movie-by-id', movies))
        .catch(err => console.log(err))
})

module.exports = router;
