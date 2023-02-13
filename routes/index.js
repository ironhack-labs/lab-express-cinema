const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res, next) => {
    try {
        let movies = await Movie.find();

        res.render('movies/movies', {movies});

    } catch (error) {
        console.log(error);
        next(error);
    }
})

router.get('/movies/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        const movie = await Movie.findById(id);

        res.render('movies/movie-details', movie);

    } catch (error) {
        console.log(error);
        next(error);
    }
})

module.exports = router;
