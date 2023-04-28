const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model') //Paso importante, importamos el modelo 

/* GET home page */
router.get('/', (req, res) => {
     res.render('index')
});
//venimos de index.hbs en donde el boton nos lleva a la ruta /movies
router.get('/movies', async(req, res) => {
    const moviesFromDatabase = await Movie.find({})
    res.render('movies', {moviesFromDatabase})
});

// {movieId: 'loQueSeaQueMePasen'}
router.get('/movie/:movieId', async(req, res)=>{
    const id = req.params.movieId
    const singleMovieFromDatabase = await Movie.findById(id)
    res.render("movie-details", {singleMovieFromDatabase})
})
module.exports = router;

