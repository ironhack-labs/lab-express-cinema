const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    const moviesFromDatabase = Movie.find({})
    res.render('movies', { moviesFromDatabase })
});

module.exports = router;