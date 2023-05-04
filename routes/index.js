const express = require('express');
const router = express.Router();

const Movie = require('./../models/movie.model')

/* GET home page */
// router.get('/', (req, res, next) => res.render('index'));

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/movies', (req, res) => {
    Movie
        .find()
        .sort({ title: 1 })
        .then(movies => res.render('movies', { movies: movies }))
        .catch(err => console.log(err))
    // res.render('movies')
})
router.get('/movie/:movieId', (req, res) => {
    const { movieId } = req.params
    Movie
        .findById({ _id: movieId })
        .then(movie => res.render('movie-detail', movie))
        .catch(err => console.log(err))
})



module.exports = router;
