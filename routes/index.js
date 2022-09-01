const express = require('express');
const router = express.Router();

const MoviesModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    MoviesModel
        .find()
        .select('title image _id')
        .then((movies) => {
            console.log(movies)
            res.render('movies', { movies })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get('/movie/:id', (req, res, next) => {
    const id = req.params.id
    console.log(id)
    MoviesModel
        .findById(id)
        .select('title image description stars director showtimes _id')
        .then((movie) => {
            res.render('movie', movie)
        })
})



module.exports = router;
