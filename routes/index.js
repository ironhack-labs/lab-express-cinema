const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie.model');


router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movies.find()
    .then((moviesList) => res.render('movies', {moviesList}))
    .catch(err => console.log(err))
});

router.get('/movie/:id', (req, res, next) => {
    const id = req.params.id

    Movies.findById(id)
    .then((selectedMovie) => res.render('movie-details', selectedMovie))
    .catch(err => console.log(err))
});


module.exports = router;
