const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movieFromDB)=> {
            res.render('movie-details', {movie: movieFromDB})
        })
})

module.exports = router;