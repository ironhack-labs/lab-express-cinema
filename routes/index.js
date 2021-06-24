const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movies
        .find()
        .select({ title: 1, image: 1 })
        .then((movies) => res.render('movies', { movies }))
        .catch((err) => console.log(err));
});


router.get('/movies/detalles', (req, res, next) => {
    Movies
        .find()
        .select({ title: 1, image: 1, director: 1, star: 1, description: 1, showtimes: 1 })
        .then((movies) => res.render('movies', { movies }))
        .catch((err) => console.log(err));
});


module.exports = router;

