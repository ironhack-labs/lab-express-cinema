const express = require('express');

const Movie = require('../models/Movie.model');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find({}).then((stuff) => res.render('movies', { stuff }));
});

router.get('/movie/:id', (req, res) => {
    Movie.find({ _id: req.params.id }).then((stuff) => {
        res.render('movie-info', { stuff });
    });
});

module.exports = router;
