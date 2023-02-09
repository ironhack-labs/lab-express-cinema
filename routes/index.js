const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/:movie_title', (req, res) => {
    const { movie_id } = req.params

    Movie
        .findById()
        .then(movies => {
            res.send(movies)
            res.render('details'), { movies }
        })
})

module.exports = router;
