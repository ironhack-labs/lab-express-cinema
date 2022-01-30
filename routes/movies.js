const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        console.log("movies")
        res.render("movies", { movies })
    })
    .catch((e) => next(e));
});



module.exports = router;

