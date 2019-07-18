const express = require('express');
const router  = express.Router();

const Movie = require("../models/Movie.js")

/* GET movie page */
router.get('/', (req, res, next) => {
    Movie.find({})
    .then(movies => {
        res.render('movies', {movies: movies});
    })
    .catch(error => {
        console.log(error)
    })
});

router.get('/:id', (req, res, next) => {
    Movie.findOne({_id: req.params.id})
    .then(movie => {
        res.render('extendedVersion', {movie})
    })
    .catch(error => {
        console.log(error)
    })
})

module.exports = router;