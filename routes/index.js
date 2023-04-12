const express = require('express');
const router = express.Router();
const Movie = require("../models/movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((data) => {
        console.log("Data is ", data)

        res.render('movies', {
            allMovies : data
        })
    })
    .catch((err) => {
        console.log("oops ", err)
    })


});

module.exports = router;
