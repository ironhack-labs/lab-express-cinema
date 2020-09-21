const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
    const movies =  await Movie.find({});
    res.render("movies", {movies});
    } catch (error) {
        console.log(error);
    }

});


router.get('/movie/:id', async (req ,res) => {
    try {
        const movieId = req.params.id;
        const thisMovie = await Movie.findById(movieId);
        res.render("movie-info", {movie: thisMovie});
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
