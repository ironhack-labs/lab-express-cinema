const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie.model.js')

console.log(Movies);

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movies.find()
    .then(allMoviesfromDB => {
        // console.log('retrivied movies:', allMoviesfromDB)
    res.render('movies', {moviesList: allMoviesfromDB})
    })
    .catch(error => console.log(error));
});

router.get('/details/:id', (req, res, next) => {
    const movieId = req.params.id;
    Movies.findById(movieId)
    .then(theMovie => {
        res.render('details', { movie: theMovie })
    })
    .catch(err => console.log('No movies found, error', err));
})


module.exports = router;

