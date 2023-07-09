const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movie.find()
    .then((movie) => {
        res.render("movies", { movie })
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router;
