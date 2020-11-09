const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((moviesFromIronhack) => {
            res.render("movies", {
                movies: moviesFromIronhack
            });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id).then((moviesFromIronhack) => {
        res.render("movie-detail", moviesFromIronhack);
    });
});

module.exports = router;