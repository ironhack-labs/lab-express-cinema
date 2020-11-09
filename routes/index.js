const express = require('express');
const Movie = require ("../models/movie.models.js")
const router = express.Router();

module.exports = router;

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
    .then((allMoviesFromDB) => {
        res.render("movies", { allMoviesFromDB });
    })
    .catch(error => console.log("Error while getting the movies from the DB:", error))
});

router.get('/movies/:id', (req, res) => {
    const {id} = req.params;

    Movie.findOne({_id: id})
    .then((theMovie) => {
        res.render("movie-details", { theMovie });
    })
    .catch(error => console.log("Error while getting the movies from the DB:", error))
});


