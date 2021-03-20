const express = require('express');

const router = express.Router();

const movie = require("../models/Movies");

router.get('/', (req, res, next) => {
    movie.find()
        .then(movies => {
            console.log(movies) ;
            res.render("movies", {movies})
        })
        .catch(error => console.log(error))
});

module.exports = router;