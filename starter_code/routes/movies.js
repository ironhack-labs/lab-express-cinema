const express = require('express');
const router = new express.Router();
const movieModel = require("../models/Movie");

router.get("/", (req, res) => {
    movieModel
        .find()
        .then(movies => {
            res.render("movies", {
                movies
            });
        })
        .catch(dbErr => {
            console.log("Oh no, database error", dbErr);
        });
});

router.get("/:id", (req, res) => {
    movieModel
        .findById(req.params.id)
        .then(movie => {
            res.render("movie-info", {
                movie
            });
        })
        .catch(err => console.error("Oops, database error!", err));
});


module.exports = router;