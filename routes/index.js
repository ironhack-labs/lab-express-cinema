const express = require('express');
const router = express.Router();

// Import of the model Movies from './models/Movies.model.js'
const Movie = require("../models/Movie.model"); 

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
/* GET movies page */
router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find()
    // console.log(movies)
    res.render('movies', {movies})
});
// GET one movie
router.get('/movie/:id', async (req, res) =>{
    try{
        const selectedMovie = await Movie.findById(req.params.id)
        console.log(selectedMovie)
        res.render('movie.hbs', selectedMovie)
    } catch {
        res.render('not-found.hbs', {errorMsg: "Movie not found"})
    }
    
})

module.exports = router;
