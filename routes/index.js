const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');
/* GET home page */
router.get('/', (req, res) => res.render('index'));
/* GET movies page */
router.get('/movies', (req, res) => {
Movie.find({})
    .then((allTheMoviesFromDB) => {
    console.log(allTheMoviesFromDB);
    res.render("movies-list", { allTheMoviesFromDB })
    })
  .catch((error) => `Error while fetching all movies: ${error}`)})

router.get("/movies/:id", (req, res) => {
    const { id } = req.params;
  
    Movie.findById(id)
      .then((foundMovie) => res.render("movie-details", foundMovie))
      .catch((error) => `Error while creating a new book: ${error}`);
  });
    
module.exports = router;
