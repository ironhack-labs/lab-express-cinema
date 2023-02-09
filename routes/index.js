const express = require('express');
const router = express.Router();

/* GET home page */

const Movie = require('../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie
        .find()
        .select({ title: 1, image: 1 })
        .sort({ title: 1 })
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
})

router.get('/details/:movie_id', (req, res) => {
    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movies => {
            res.render('details', movies)
        })
        .catch(err => console.log(err))
})


module.exports = router;

