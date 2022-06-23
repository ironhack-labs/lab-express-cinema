const router = require("express").Router();
// const express = require('express');
const Movie = require('../models/Movie.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movie => {
            res.render('movies', { movie })
        })
        .catch(err => console.log(err))

})

router.get('/movie-details/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('moviedetails', movie)
        })
})

module.exports = router;