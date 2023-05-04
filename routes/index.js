const express = require('express');
const router = express.Router();

const Movie = require("./../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
module.exports = router;

router.get("/movies", (req, res, next) => {

    Movie
    .find()
    .then(allMovies => res.render('movies', { movies: allMovies }))
    .catch(err => console.log(err))
});

router.get("/movie-details/:id", (req, res, next) => {

    const {id} = req.params
    Movie
    .findById(id)
    .then(theMovie => res.render('movie-details', theMovie))
    .catch(err => console.log(err))
})

