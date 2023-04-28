const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async(req, res) => {
    const moviesFromDatabase = await Movie.find({})
    res.render('movies', {moviesFromDatabase})
});

router.get('/movie/:movieId', async(req, res)=>{
    const id = req.params.movieId
    const singleMovieFromDatabase = await Movie.findById(id)
    res.render("movie-details", {singleMovieFromDatabase})
})

module.exports = router;
