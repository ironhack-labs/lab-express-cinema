const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', async (req, res, next)=>{
    try {
        const movies = await Movie.find();
        res.render('movies', {movies});
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next)=>{
    try {
        const movie = await Movie.findOne({'_id': req.params.id});
        console.log(movie);
        res.render('movieDetails', {movie});
    } catch (error) {
        next(error);
    }
});

module.exports = router;