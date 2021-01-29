const express = require('express');
const { render, resource } = require('../app');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res,next) => {
    Movie.find()
    .then (movies => {
        console.log(movies);
        console.log(movies[0]._id)
        res.render("movies",{movies})
    })
    .catch((e) => next(e))
});
router.get('/movies/:id',(req,res,next) =>{
    Movie.findById(req.params.id)
    .then((movie) => {
        console.log(movie);
        console.log(movie.id)
        res.render("detailmovie",{movie})
    } )

});

module.exports = router;
