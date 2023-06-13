const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(movies => {
        res.render('movies', {movies})
    }).catch(err => console.log('Err sending all the movies'))
})

router.get('/movies/:id/movie', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movie', {movie})
    }).catch(err => console.log('Err finding single movie'))
})

module.exports = router;