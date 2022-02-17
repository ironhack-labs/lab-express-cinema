const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find().then(allMovies => {
        res.render('movies', { allMovies });
    })
});

router.get('/movies/:id', (req, res) =>{
    const { id }= req.params
    Movie.findById(id)
    .then(movie =>{
        res.render('movie-info', { movie })
    console.log(movie)
    })
    .catch(error => console.log(error));
});

module.exports = router;
