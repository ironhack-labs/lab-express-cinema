const express = require('express');
const Movie = require('../models/Movie.models');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie
        .find()
        .then(movies => res.render("movies", { movies }))
        .catch(err => console.log(err))
})
router.get("/movie/:_id", (req, res) => {
    const _id = req.params
    Movie
        .findById(req.params._id)
        .then(moviesSelect => {
            res.render("movies-info", moviesSelect)
        })
        .catch(err => console.log(err))
})
module.exports = router;
