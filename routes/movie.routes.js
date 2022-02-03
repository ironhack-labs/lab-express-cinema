const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');


router.get('/', async (req, res) => {
    try {
        const foundMovies = await Movie.find({})
        res.render('movies', {
            data: foundMovies
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router