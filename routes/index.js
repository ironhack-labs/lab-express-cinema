const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
    Movie.find({})
    .then((movies) => {
        console.log(movies)
        res.render('movies' , {peliculas : movies}) 
    })
});

router.get('/movies/:id', async (req, res, next) => {
    const movieId =  req.params.id
    Movie.findById(movieId)
    .then((movies) => {
        console.log(movies)
        res.render("movie-info", {info : movies})
    })

});


module.exports = router;

