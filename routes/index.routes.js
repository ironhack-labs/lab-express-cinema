const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => {
Movie.find()
.then((response) => {
    res.render("index", {movies: response});
});
});



// create movie

// all movies

// single movie

// update movie

// delete movie
module.exports = router;