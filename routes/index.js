const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then( moviesFromDB => {
        //console.log(moviesFromDB);
        res.render("movies", {moviesFromDB});
    })
    .catch( err => {
        console.log(err);
    });
});

router.get("/movie/:movieID", (req, res, next) => {
    Movie.findById(req.params.movieID)
    .then(movie => {
        console.log(movie)
        res.render("movie-details", {movie});
    })
    .catch(err => console.log(err));
    
    
});



module.exports = router;