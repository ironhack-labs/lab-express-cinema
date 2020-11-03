const express = require('express');
const Movie = require('../models/Movies');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', {title: "Ironhack Cinema"}));

module.exports = router;

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
