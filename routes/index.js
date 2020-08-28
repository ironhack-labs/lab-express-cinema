const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async(req, res) => {
    const movies = await Movie.find()
    console.log(movies)
    res.render("movies", {
        movies
    })
})

router.get("/movie/:movieId", async(req, res) => {
    const {
        movieId
    } = req.params
    const movie = await Movie.findById(movieId)
    console.log(movie)
    res.render('movieDetail', movie)
})

module.exports = router;