const express = require('express');
const Movie = require('../models/Movie.models');
const router = express.Router();

require('../db')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
})

router.get('/details/:movie_id', (req, res) => {
    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => res.render('details', movie))
        .catch(err => console.log(err))

})

module.exports = router;
