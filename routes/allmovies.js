const express = require('express');
const Movie = require('../models/Movie')
const router = express.Router();

router.get('/allmovies', (req, res, next) =>{
    console.log('it works')
    Movie.find().then(moviesFromDb => {
        res.render('allmovies', {
            movieList: moviesFromDb

        })
    })
})

module.exports = router;