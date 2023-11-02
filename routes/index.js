const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
    res.render('index')
});

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(dataMovies => res.render('movies-result', { dataMovies }))
        .catch(err => console.log("Se ha producido un error", err))
})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => res.render('movie-detail', movie))
        .catch(err => console.log("Se ha producido un error", err))
})

module.exports = router;
