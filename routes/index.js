const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find();
    
    res.render("movies", {movies});
    })
  
 router.get('/movie/:movieId', async (req, res, next) => {
    const movie = await  Movie.findById(req.params.movieId)

     res.render("movie", {movie})
         
});
  

 module.exports = router;
