const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model');

// MOVIES page
router.get('/movies', (req, res, next) => {
    MovieModel
        .find()
        .then(movies => res.render('movies-page', { movies }))
        .catch(err => console.log(err))
})

// DETAILS page
router.get('/movie/:id', (req, res, next) => {

    const { id } = req.params

    MovieModel
        .findById(id)
        .then(movie => {
            res.render('details-page', movie)
        })
        .catch(err => console.log(err))
})

module.exports = router;