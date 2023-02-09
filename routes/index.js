const express = require('express');
const router = express.Router();
require("../db")
const Movie = require("../models/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'))
router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => res.render("movies", { movies }))
        .catch(err => console.log(err))
});
router.get('/movie/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => res.render("movie", movie))
        .catch(err => console.log(err))

})
module.exports = router;
