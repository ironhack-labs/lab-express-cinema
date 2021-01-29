const express = require('express');
const router = express.Router();

const movies = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    movies.find()
    .then(allMoviesfromDB => {
    res.render('movies', {moviesList: allMoviesfromDB});
    })
    .catch(error => console.log(error));
});

router.get('/movies/:id', (req, res, next) => {
    const { movieId } = req.params;
    movies.findById(moviesId)
    .then(theMovie => {
        res.render('details', { movie: theMovie })
    })
    .catch(err => console.log('No movies found, error', err));
})


module.exports = router;

