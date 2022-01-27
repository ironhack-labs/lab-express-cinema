const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");



router.get('../views/movies.hbs', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        console.log("movies")
        res.render("movies", { movies })
    })
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render("movie", { movie })
    })
    .catch((e) => next(e));
})

module.exports = router;

