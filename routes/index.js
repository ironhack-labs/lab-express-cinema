const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */



router.get('/', (req, res, next) => res.render('index'));

router.get('/movies/:id', (req, res, next) => {
    console.log(`entro aquí`)
    Movie
        .findById(req.params.id)
        .then(movie => {
            res.render('moviesDetails', {
                movie
            })
        })
        .catch((e) => next(e));
})


router.get('/movies', (req, res, next) => {
    console.log(`entro movie`)
    Movie
        .find()
        .then(movies => {
            // console.log(data)

            res.render('movies', { movies: movies })
                // {movies: data} con esto hago el foreach
                //'movies' es nombre del hbs
        })
        .catch(error => console.log(error));
})


module.exports = router;