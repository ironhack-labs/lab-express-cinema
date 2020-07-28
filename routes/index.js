const express = require('express');

const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log('All movies:', allMovies._id)
            res.render('movies', {moviesArr: allMovies})
        })
        .catch((err) => {
            console.log(err);
        })

});

router.get('/movies/:id', (req, res, next) =>{
    Movie.findById(req.params.id)
        .then (oneMovie => {
            console.log(oneMovie)
            res.render('movie', {movie: oneMovie})
        })
        .catch ((err) => {
            console.log(err)
        })
})

module.exports = router;
