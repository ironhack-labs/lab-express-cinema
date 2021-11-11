const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {

    Movie.find()
      .then(allTheMovies => {
        console.log(allTheMovies);
        res.render("movies", { allTheMovies })
        })
      .catch(err => console.log(err))
  
  });

router.get('/details/:moviesId', (req, res) => {
    const clickedMovie = req.params.moviesId
    console.log(clickedMovie);
    Movie
        .findById(clickedMovie)
        .then((movieResult) => {
            console.log(movieResult);
            res.render('details', movieResult)
        })
        .catch(err => console.log('The error while searching artists occurred: ', err));
})

module.exports = router;
