const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/movies', (req, res) => {
    Movie
        .find()
        // .select({ title: 1, image: 1, })
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/details/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('movies/details', movie)
        })
        .catch(err => console.log(err))
})


module.exports = router;
