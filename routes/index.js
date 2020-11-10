const express = require('express');
const router = express.Router();

const Movie= require("../models/Movie.model");
 
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//created routes
router.get('/movies', (req, res, next) => {
    Movie.find({})
    .then((allTheMoviesFromDB) => {
        console.log(allTheMoviesFromDB);
        res.render('movies', { allTheMoviesFromDB });
    })
    .catch(error => console.log('Error while retrieving movie details: ', error));
});

router.get('/movies/:id', (req, res, next) => {
    const { id } =req.params;

    Movie.findById(id)
    .then((foundMovie) => {
        res.render('movies', foundMovie);
    })
    .catch(error => console.log('Error while retrieving movie details: ', error));
});

module.exports = router;

