const express       = require('express');
const Movie         = require('../models/Movie.model.js');

const router        = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});


router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((allMovies) => {
            console.log(allMovies)
            res.render('movies', {movies:allMovies})
            
        }).catch(error => {
            next(error)
        })
})

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id
    Movie.findById(movieId)
        .then((pelis2) => {
            console.log(pelis2)
            res.render('Each-movie', { movies: pelis2 })
        }).catch(error => { next(error) })
})

module.exports = router;
