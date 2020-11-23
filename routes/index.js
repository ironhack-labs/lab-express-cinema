const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => {
    
    res.render("index.hbs")

});


router.get("/movies", (req, res) => {
    Movie.find()
    .then(movies => {
        //console.log(movies)
        res.render("movies", {movies})
    })
    .catch(err => console.log(err))
});


router.get("/movies/:movieId", (req, res, next) => {
    
    Movie.findById(req.params.movieId)
    .then((movieDetails) => {
        //console.log(info)
        res.render("info", {movieDetails})
    })
    .catch(err => console.log(err))
});

module.exports = router;

