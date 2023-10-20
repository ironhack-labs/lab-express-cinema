const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => {
    res.render("index");
});

// all movies
router.get("/movies/allMovies", (req, res) => {
  res.render("movies/allMovies")  
})

// create movie
// get
router.get("/movies/create", (req, res) => {
    res.render("movies/create")  
  })
// post
router.post("/movies/create", (req, res) => {
    const newMovie = req.body;
    Movie.create(newMovie)
    .then(response => {
        console.log(response)
        res.redirect('/movies/allMovies')
    })
    .catch ((error) => console.log(error));
});

// single movie

router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then((response) => {
    res.render('movies/movie', { movie: response});
    })
    .catch(error => console.log(error));
});

// update movie

// delete movie
module.exports = router;