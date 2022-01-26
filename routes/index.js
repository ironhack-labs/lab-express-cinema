//jshint esversion:8

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    Movie.find()
        .then((movies) => {
            //console.log(`Got ${movies.length} movies from DB.`);
            res.render('movies', {movies});
        }).catch((err) => console.log('Something went wrong while trying to get movies from DB.',err));
    
});

module.exports = router;
