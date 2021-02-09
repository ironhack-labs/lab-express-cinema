const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((pelis) => {
            res.render("movies", { movies: pelis })
        }).catch(error => { next(error) })
});

router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id
    Movie.findById(movieId)
        .then((pelis2) => {
            console.log(pelis2)
            res.render('Each-movie', { movies: pelis2 })
        }).catch(error => { next(error) })
})

module.exports = router;