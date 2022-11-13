const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

router.get('/', (req, res, next) => {
    MovieModel.find()
        .then((moviesFromDB) => {
            res.render('movies', { movies: moviesFromDB })
        })
        .catch((err) => {
            next(err)
        })
})

router.get('/movie/:movieId', (req, res, next) => {
    const { movieId } = req.params
    MovieModel
        .findById(movieId)
        .then((moviesFromDB) => {
            res.render('movie', moviesFromDB)
        })
        .catch((err) =>
            next(err))
})

module.exports = router;
