const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies)=>{
        console.log(movies)
        res.render("movies/movie", { movies });
    })
    .catch((error) => next(error));
});

router.get('/movies/:id', (req, res, next) => {

    Movie.findById(req.params.id)
    .then((movie)=>{
        res.render('movies/details', movie);
    })
    .catch((error)=>next(error));

});








module.exports = router;