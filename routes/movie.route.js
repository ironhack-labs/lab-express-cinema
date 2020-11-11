const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')


//render the movies page.
router.get("/movies", (req, res, next) => {
    Movie.find({})
        .then((moviesDB) =>
            res.render("movies", { moviesDB })
        )
        .catch((error) => `Error while fetching all books: ${error}`);
});

//render the movies details page.
router.get("/movies/:id", (req, res, next) => {
    const { id } = req.params;

    Movie.findById(id)
        .then((foundMovie) => res.render("movie-details", foundMovie))
        .catch((error) => `Error while finding book: ${error}`);
});



module.exports = router;