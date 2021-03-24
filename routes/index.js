const express = require('express');
const Movies = require('../models/Movies');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
        const movies = await Movies.find();
        res.render('movies', { movies})
    } catch (error) {
        console.log(error);
    }
});

router.get('/movie/:movieId', async (req, res) => {
    try {
        const { movieId } = req.params;

        const movie = await Movies.findById(movieId);

        res.render('movie-details', movie);

        console.log(movieId);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
