const express = require('express');
const router = express.Router();
const Movie = require('../models/Movies.models')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;


//listado de pelis
router.get("/movies", (req, res) => {
    Movie
        .find()
        .then(movies =>
            // console.log(movies)
            res.render('moviesList', { movies })
        )
        .catch(err => console.log(err))
})
///
router.get("/theMovie/:id", (req, res) => {
    Movie
        .findById(req.params.id)
        .then(theMovie =>
            // console.log(movies)
            res.render('theMovie', { theMovie })
        )
        .catch(err => console.log(err))
})