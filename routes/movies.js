const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    // res.render('movies')
    Movie.find({})
        .then((moviesFromDb) => {
            res.render('movies', { movies: moviesFromDb })
        })
        .catch(error => console.log('An error happened while find movies:', error));
})


module.exports = router;
