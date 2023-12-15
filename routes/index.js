const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies });
        })
        .catch(err =>{
            console.log(err)
        })
});

router.get('/movies/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(description =>{
            res.render('descriptions', description)
        })
});

module.exports = router;
