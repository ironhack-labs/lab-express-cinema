const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            console.log(`The Movies are: ${movies}`);
            res.render('movies', { movies });
        })
        .catch(error => {
            console.log(`Oh no, we are having an error: ${error}`);
        });
});


router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => {
            console.log(`The movie is: ${movie}`);
            res.render('movie-detail', { movie });
        })
        .catch(error => {
            console.log(`Oh no, we are having an error: ${error}`);
        });
});




module.exports = router;