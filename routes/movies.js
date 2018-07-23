var express = require('express');
var router = express.Router();

const Movie = require('../models/movie')

/* GET movies listing. */
router.get('/', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies', {movies})
    })
    .catch((error) => {
        next(error)
    })
});



router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then((movie) => {
        res.render('onlyMovie', movie)
    })
    .catch((error) => {
        next(error)
    })
});

module.exports = router;
