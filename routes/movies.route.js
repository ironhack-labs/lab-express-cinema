const express = require('express');
const router = express.Router();

const Movie = require("./../models/Movie.model")

/* GET movies page */
router.get('/', (req, res, next) => {
    Movie.find({}, {
            image: 1,
            title: 1
        })
        .then(allMovies => res.render("movies", {
            allMovies
        }))
        .catch(err => console.log(`There was an error with the DDBB`))
});

module.exports = router;