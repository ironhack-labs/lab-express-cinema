const express = require('express');
const Movie = require('../models/Movie.model');
const mongoose = require("mongoose");
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


// READ ALL
router.get("/movies", (req, res) => {
    console.log(req.query);

    Movie.find()
        .then((moviesDocuments) => {

            res.render("movies", {
                movies: moviesDocuments,

            });
        })
        .catch((error) => {
            console.log(error);
        });
});

// READ ALL
router.get("/movie/:id", (req, res) => {
    const isValid = mongoose.isValidObjectId(req.params.id);

    if (isValid) {
        Movie.findById(req.params.id)
            .then((moviesDocuments) => {
                res.render("one-movie", {
                    movie: moviesDocuments,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        res.render("not-found.hbs");
    }


});

module.exports = router;