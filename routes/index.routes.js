const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => res.render('Movies/movies', { movies: movies }))
        .catch(err => console.log(err))
})

router.get('/movies/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => res.render('Movies/movies-info', movie))
        .catch(err => console.log(err))
})



module.exports = router;
