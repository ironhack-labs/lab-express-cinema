const express = require('express')
const router = express.Router()

const Movie = require("../models/Movie.model")

router.get('/', (req, res, next) => res.render('index'))

router.get("/movies", (req, res) => {
    Movie
        .find()
        .then(movies => res.render("movies", { movies }))
        .catch(err => console.log(err))
})

router.get("/movie/:movieId", (req, res) => {
    const { movieId } = req.params
    Movie
        .findById(movieId)
        .then(movie => res.render("movieid", movie))
        .catch(err => console.log(err))
})

module.exports = router