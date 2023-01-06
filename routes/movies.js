const Movie = require('../models/Movie.model');

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    Movie.find()
        .then((movies) => {
            console.log("The movies found are: ", movies);
            res.render('movies', { movies });
        })
        .catch((err) => {
            console.log('Something went wrong while finding movies! ', err);
            next(err);
        })
})


module.exports = router;