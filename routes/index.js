const express = require('express');
const router = express.Router();

/* GET home page */
const Movie = require ("../models/Movie.model")

router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res) => {
     console.log(Movie.find());
    Movie.find().then((allMovies) => {
        res.render("movies", allMovies )})
        .catch(err => console.log(err))
    });

    router.get("/movie/:id", (req, res) => {
        let (id) = req.params
    Movie.findById(id)
        .then(data => res.render("details", data))
        .catch(err => console.log(err))
})



module.exports = router;