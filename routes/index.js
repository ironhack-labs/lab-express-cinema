const express = require('express');
const MoviesModel = require('../models/Movies.model');
const router = express.Router();


router.get('/', (req, res,) =>
    res.render("Index"));



router.get("/movies", (req, res) => {

    MoviesModel
        .find()
        .then(movie => {
            res.render("movies", { movie })

        })
})




router.get("/movies/:id", (req, res) => {
    const { _id } = req.params

    MoviesModel
        .find()
        .then(movieinfo => {
            res.render("moviesinfo", { movieinfo: movie })

        })
})
module.exports = router
