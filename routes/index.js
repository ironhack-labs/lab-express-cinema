const express = require('express');
const router = express.Router();
const pelicula = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    pelicula.find()
    .then((totalPelis) => {
        console.log("Total pelis:", totalPelis)
        res.render("movies", {totalPelis})
    })
    .catch(err => console.log(err))
})

router.get('/movies:id', (req, res, next) => {
    pelicula.findById(req.params.id)
    .then((pel) => {
        console.log("Pelis:", pel)
        res.render("movies-details", {pel})
    })
    .catch(err => console.log(err))
})

module.exports = router;