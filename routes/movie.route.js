const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((allMoviesDB) => {
            console.log(allMoviesDB),
                res.render('movies', {
                    allMoviesDB
                })
        })
        .catch((error) => `Error while fetching all movies: ${error}`)
});

router.get("/movies/:id", (req, res) => {
    const {
        id
    } = req.params;

    Movie.findById(id)
        .then((foundMovie) => res.render("movie-details", foundMovie))
        .catch((error) => `Error while finding book: ${error}`);
});

module.exports = router;