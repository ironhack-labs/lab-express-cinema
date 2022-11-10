const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie
        .find()
        .then(movieDB => {
            console.log(movieDB)
            res.render("movies", { movie: movieDB })
        })
})
router.get("/movies/:movieID", (req, res) => {
    const { movieID } = req.params
    Movie
        .findById(movieID)
        .then(movieDB => {
            console.log(movieDB)
            res.render("movie-details", { movieDB })
        })
})


module.exports = router;
