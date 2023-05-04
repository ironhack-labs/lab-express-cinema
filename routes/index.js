const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get('/movies', (req, res) => {

    Movie
        .find()
        .sort({ title: 1 })
        .then(moviesList =>
            res.render('movies', { movies: moviesList }))
        .catch(err => console.log(err))
})
router.get("/movie-details/:id", (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(data =>
            res.render("movie-details", data))
        .catch(err => console.log('The error while searching artists occurred: ', err));
})
