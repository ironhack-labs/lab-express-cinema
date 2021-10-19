const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then( data => {
    res.render('movies', {data})
    })
    .catch (err => {console.log(`An error occured getting the movies from DB: ${err}`)})
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then( data => {
        console.log(data)
        res.render('movie-details', data)
    })
})

module.exports = router;
