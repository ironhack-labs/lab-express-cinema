const express = require('express');
const Movie = require('../models/Movie.model')
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find()
        console.log(movies);
        res.render('allMovies', { movies })
    } catch (err) { console.log(err) }
})


router.get('/movieDetails/:movieId', (req, res, next) => {
    const id = req.params.movieId;

    Movie.findById(id)
        .then(movie => {
            res.render('detailsMovies', { movie });
        })
        .catch(err => {
            { console.log(err) }

        });
});
module.exports = router;
