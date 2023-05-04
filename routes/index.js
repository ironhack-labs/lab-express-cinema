const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//movies
router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movie => res.render("movies", { movies: movie }))
        .catch(err => console.log(err))
})

router.get('/moviesSpects/:id', (req, res, next) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => res.render('moviesSpects/movieSpect', movie))
        .catch(err => console.log(err))
})
module.exports = router;
