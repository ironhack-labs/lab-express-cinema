const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

router.get("/", (req, res, next) => {
    res.render("index")
})

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            res.render('movies-page', { movies: allMovies })
        })
        .catch(err => console.log(err))
})


router.get('/movie/:id', (req, res) => {

    const { _id } = req.params

    Movie
        .findById(_id)
        .then(movie => res.render('movies-details', movie))
        .catch(err => console.log(err))
})
module.exports = router;
