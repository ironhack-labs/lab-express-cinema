const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

// /
router.get('/', (req, res, next) => {

    Movie.find().then((moviesFromDB) => {
        console.log(moviesFromDB)
        res.render('index', { movies: moviesFromDB })
    })

});

router.get('/seemore/:id', (req, res, next) => {
    console.log(req.params.id)
    Movie.find().then((moviesFromDB) => {
        console.log(moviesFromDB)
        res.render('seemore', { movies: moviesFromDB })


    })

});
module.exports = router;
