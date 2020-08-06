const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); 


/* GET movies page */
router.get('/', async (req, res, next) => {
    await Movie.find()
        .then(movies => {console.log(movies); res.render('movies', {movies})})
        .catch(error => console.log('Error while getting the movies from the DB: ', error));
});

module.exports = router;
