const express = require('express');

const Movie = require('./../models/Movie.model')

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
    res.render('index')
});

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
})

router.get('/movies/:id', (req, res) => {

    Movie
        .findById(req.params.id)
        .then(movie => res.render('movie-detail', movie))
        .catch(err => console.log(err))
})


module.exports = router;
