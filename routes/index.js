const express = require('express');
const router = express.Router();

/*Movie Collection*/
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => {
    const data = {
        layout: false
    };
    res.render('index', data);
});

/* Movies view */
router.get('/movies', (req, res) => {
    Movie.find()
        .then(movies => {
            res.render('movies', {movies});
        })
        .catch(e => console.error(e));
});


/*Movie details */
router.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    console.log(movieId)
    Movie.findById(movieId)
        .then(movie => res.render('movie-details', {movie: movie}))
        .catch(e => console.error(e));
});


module.exports = router;