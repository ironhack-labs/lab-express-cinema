require("./../configs/db.config");

const express = require('express');
const router = express.Router();

const MovieModel = require("./../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
    MovieModel.find()
    .then((movieDB) => {
        res.render("movies", {movies: movieDB});
    })
    .catch(error => {
        console.log('Error while getting the movies.');
           next(error);
    });
});

module.exports = router;
