const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movies
        .find()
        .then(movies => res.render('movies', { movies: movies }))
        .catch(err => console.log(err))
})

router.get("/details-movie/:id", (req, res) => {
    const { id } = req.params

    Movies
        .findById(id)
        .then(movie => res.render('details-movie', { movie }))
        .catch(err => console.log(err))
})

module.exports = router;
