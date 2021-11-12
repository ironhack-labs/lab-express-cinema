const express = require('express');
const router = express.Router();
const Movie = require ("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => {
res.render('index')
});


router.get("/movies-list", (req, res, next) => {

  Movie.find()
    .then(allTheMovies => 
        res.render("movies-list", { allTheMovies }))
    .catch(err => console.log(err))

});


router.get("/details/:movieId", (req, res, next) => {

const movieChoice= req.params.movieId;
Movie.findById(movieChoice)
    .then((movie)=> { res.render("details", movie)})
    .catch(err => console.log(err))

});



module.exports = router;


