const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// MOVIES PAGE

router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((movie) => {
        res.render("movies", { movie })
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get("/movies/:id", (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
    .then((movie) => {
        res.render("movie-detail", { movie })
    })
    .catch((err) => {
        console.log(err);
    })
})

module.exports = router;
