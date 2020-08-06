const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET movies page */
router.get("/", (req, res, next) => {
  Movie.find()
  .then((moviesFromDB) => {
    console.log(moviesFromDB);
    res.render('movies', {movies: moviesFromDB})
  });
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movieFromDB)=> {
            res.render('movie-details', {movie: movieFromDB})
        })
})

module.exports = router;
