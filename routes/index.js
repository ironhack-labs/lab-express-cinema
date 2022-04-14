const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    console.log("i am trying to show movies")

    Movie
        .find()
        .then(movies => res.render('movies', { movies }))

});

router.get('/movie/:id', (req, res, next) => {
    console.log(req.params.id)

    Movie
        .findById(req.params.id)
        .then(movie => res.render('movie', movie))

});

module.exports = router;
