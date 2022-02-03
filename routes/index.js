const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', async (req, res) => {
    try {
        const foundMovies = await Movie.find({})
        // console.log(foundMovies)
        res.render("movies", {
            data: foundMovies
        })
    } catch (error) {
        console.log(error)
    }
});

router.get('/movies/:id', async (req, res) => {
    try {
        const movieTitle = req.params.id
        console.log(movieTitle)
        const foundMovie = await Movie.findOne({ title: movieTitle })
        console.log(foundMovie)
        res.render("detail", {
            data: foundMovie
        })
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;
