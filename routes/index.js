const express = require('express');
const router = express.Router();

// const Book = require('./../models/Book.model')
const Movie = require('../models/Movie.model');

/* GET HOME PAGE */
router.get('/', (req, res, next) => res.render('index'));

/* GET MOVIES */
router.get("/movies", (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render("movies", {movies})
            // console.log(movies)
        })
        .catch(err => console.log(err))

})

/* GET DETAILS */
router.get("/moviedetails/:id", (req, res) => {

    const { id } = req.params
    Movie
        .findById(id)
        .then(movies => {
            res.render('moviedetails', movies )
        })
        .catch(err => console.log(err))
})


module.exports = router;
