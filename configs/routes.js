const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");


/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
    Movie
        .find()
            .then((movies) => res.render("movies", { movies }))
            .catch((e) => next(e));
})

router.get("/movies/:id", (req, res, next) => {
    const id = req.params.id
    Movie
        .findById(id)
            .then((movie) => res.render("movieDetail", movie))
            .catch((e) => next(e));
})                                                                                          

module.exports = router;
