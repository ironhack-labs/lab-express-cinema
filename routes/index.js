const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find()
        console.log(movies);
        res.render('allMovies', {movies})
    } catch (err) { console.log(err) }
})
module.exports = router;
