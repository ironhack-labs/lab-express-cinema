const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', async(req, res, next) => {
    const movies = await Movie.find({})
    res.render('movies', {movies})
})

router.get('/:movieId', async(req, res, next)=>{
    const movieId = req.params.movieId
    const movie = await Movie.findById(movieId)
    res.render('movie-details-page', {movie})
})

module.exports = router;