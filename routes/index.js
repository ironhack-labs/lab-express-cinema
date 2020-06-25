const express = require('express');

const router = express.Router();

/* GET home page */


Movie = require('../models/Movie.model.js')

router.get('/', (req,res,next) => res.render('index'));

router.get('/movies', (req,res,next) => {

    Movie.find()
        .then(allMovies => res.render('movies', {allMovies}))
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/movies-details/:id', (req,res,next) => {

    Movie.findById(req.params.id)
        .then(details => res.render('movies-details', details))
        .catch(err => console.log("Error en la BBDD", err))
})

module.exports = router;
