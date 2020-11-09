const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get('/', (req, res, next) => {
    res.render('index', {title: "IronHack Cinema"});
})

router.get("/movies", (req, res, next) => {
    Movie.find({})
    .then(allMoviesFromDB => {
        console.log(allMoviesFromDB)
        res.render("movies", {movies: allMoviesFromDB})
    })
})

router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movieFromDB) => {
        res.render('movie-detail', movieFromDB)
      })
})
module.exports = router;