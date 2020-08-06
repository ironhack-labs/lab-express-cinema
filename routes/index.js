const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model.js");
router.get('/', (req, res, next) => res.render('index'));
router.get('/', (req, res) => res.render('index'));

module.exports = router;
router.get('/movies', (req, res) => {
    Movies.find((err, data) => {
        res.render('movies', {
            movies: data
        })
    });
});

router.get('/movies/:id', (req, res) => {
    const idMovie = req.params.id;
    Movies.findById(idMovie, (err, data) => {
        res.render('movie', { 
            movie: data
        });
    });
});

module.exports = router;