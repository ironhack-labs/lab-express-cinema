const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movie) => {
            console.log("movie: ", movie);
            res.render('movie', { movie: movie });
        })
        .catch(err => console.log(err));
});

module.exports = router;