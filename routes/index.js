const express = require('express');
const router = express.Router();

// Movie Model
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
  });

/* GET all movies */
router.get('/movies', (req, res, next) => {

    Movie.find()
    .then( (movies) => { 
        console.log(movies)
        res.render("movies", { movies: movies }) 
    })
    .catch( (error) => res.render("error", { error: error } ))
    })

// Movie page
router.route("/movie/:id")
.get((req, res) => {
  Movie
    .findById(req.params.id)
    .then( (movie) => {
        res.render("moviePage", { movie: movie } )  
        console.log(`Showing movie: ${movie.name}`)
    })
    .catch( (error) => res.render("error", { error: error } ))
})

module.exports = router;
