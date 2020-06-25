
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

/* GET movies */

router.get('/', (req, res, next) => {


    Movie
        .find()
        .then(moviesArr => res.render('movies', {moviesArr: moviesArr}))
        .catch(err => console.log('el error en la BBDD es', err))

})

module.exports = router;
