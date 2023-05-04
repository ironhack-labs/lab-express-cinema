const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')


router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {

    Movie
        .find()
        .sort({ title: 1 })           // Ordenamos por título ASC
        .then(moviesList =>
            res.render('movies', { movies: moviesList }))
        .catch(err => console.log(err))
})

router.get("/movie-details/:id", (req, res, next) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(moviesDetails =>
            res.render('movie-details', moviesDetails))
        .catch(err => console.log(err))
})




module.exports = router;

/* 

app.get('/beers', (req, res) => {
    punkAPI
        .getBeers()
        .then(beersFromApi =>
            res.render('beers', { beers: beersFromApi }))
        .catch(error => console.log(error));
});
 */