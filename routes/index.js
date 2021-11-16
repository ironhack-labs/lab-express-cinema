const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    const movies = await Movie.find()
    console.log(movies)
    res.render('movies', {movies})
})

module.exports = router;
