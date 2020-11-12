const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
  Movie.find({})
    .then((allTheMoviesFromDB) => {
      res.render("movies", { allTheMoviesFromDB })
    })
    .catch((error) => `Error while fetching all movies: ${error}`);
});

router.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    Movie.findById(id)
        .then((movieDetails) => {
            res.render('movie', { movieDetails });
        })
        .catch((error) => `Error while fetching the movie: ${error}`);
})

module.exports = router;