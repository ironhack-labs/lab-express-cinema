const express = require('express');
const router = express.Router();
require('./../seed/movies.seed')

const Movie = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => {
            console.log(movies)
            res.render('movies', { movies })
        }).catch()
});

router.get('/movie/:id', (req, res, next) => {
    let id = req.params
    Movie
        .findById(id.id)
        .then((movie) => {
            console.log(movie)
            res.render('movie', { movie })
        })
        .catch()
})
module.exports = router;
