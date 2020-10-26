const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((moviesDB) => {
        res.render("movies", {movies: moviesDB});
    })
    .catch((error) => {
        console.log(error);
    })
});

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then((oneMovie) => {
        res.render("movies-details", {movies: oneMovie});
    })
    .catch((error) => {
        console.log(error);
    })
});

module.exports = router;
