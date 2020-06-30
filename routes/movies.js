const express = require('express');
const Movie = require('../models/Movie')
const router = express.Router();

/* GET home page */
router.get('/movies', (req, res, next) =>{
    console.log("I am here");
Movie.find().then(moviesFromDatabase => {
    console.log(moviesFromDatabase);
    res.render('movies' , { movies : moviesFromDatabase})
}).catch(err => {
    console.log(err);
})
});

router.get('/movies/:movieId', (req, res, next) =>{
const movieId = req.params.movieId;
Movie.findById(movieId).then(moviesFromDatabase => {
    console.log(moviesFromDatabase);
    res.render('moviedetails' , { movie : moviesFromDatabase})
}).catch(err => {
    console.log(err);
})
});

module.exports = router;