const router = require('express').Router();
const Movie = require('../models/Movie.model')

router.get('/', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies/movies', {movies: allMovies})
    } catch (error) {
        console.log(error);
    }
});

router.get('/:movieId', async (req, res) => {
    try {
        const { movieId } = req.params;
        const theMovie = await Movie.findById(movieId)
        res.render('movies/movie-detail', {movie: theMovie});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;