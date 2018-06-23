const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/movies', (req, res, next) => {

    Movie.find().then(movies => {
        res.render('movies/index', {movies});
    }).catch(err => {
        console.log(err)
    })

});

router.get('/movie/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({
        '_id': movieId
    }).then(movie => {
        res.render('movies/details', {
            movie
        });
    }).catch(err => {
        console.log(err)
    })

});

module.exports = router;
