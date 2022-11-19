const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        // console.log('All movies: ', allMovies)

        res.render('movies/movies', { moviesArray: allMovies })

    } catch (error) {
        next(error)
    }
});


router.get('/:movieID', async (req, res, next) => {
    try {
        const { movieID } = req.params
        const movie = await Movie.findById(movieID);

        res.render('movies/movie-details', movie)

    } catch (error) {
        next(error)
    }
})

module.exports = router;