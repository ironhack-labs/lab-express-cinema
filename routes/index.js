const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res, next) => {
    Movies.find() 
    .then((data) => {
        res.render('movies', 
        { movies:data});
    })
    .catch ((error) => {
    console.log(`Error: ${error}`)
    });
});

router.get('/movies:id', (req, res, next) => {
    const {movieId} = req.params.id;
    Movies.findOne(movieId)
    .then((data) =>
        res.render('movie', 
        { movie: data})
    )
    .catch ((error) => {
        console.log(`Error:${error}`)
    });   
});

module.exports = router;
