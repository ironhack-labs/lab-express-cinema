const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    MovieModel
        .find()
        .then((movies) => {
            res.render('movies', { movies });
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/movie/:id', (req, res, next) => {
    const { id } = req.params;
    MovieModel
        .findById(id)
        .then((movie) => {
            res.render('movie', movie);
        })
        .catch((err) => next(err));
});

module.exports = router;
