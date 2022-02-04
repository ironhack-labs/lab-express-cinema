const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model');

// Movies page

router.get('/movies', (req, res, next) => {
    MovieModel
        .find()
        .then(movies => res.render('movies-page', { movies }))
        .catch(err => console.log(err))
})