const express = require('express');
const router = express.Router();

/* GET home page */

const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => res.render('index'));

router.get('/peliculas/listado', (req, res) => {
    // res.send('index')

    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))

});

router.get('/peliculas/detalles/:id', (req, res) => {

// res.render('movie-details')

    const { id } = req.params
    Movie
        .findById(id)
        .then(movie => {
            res.render('movie-details', movie)
        })
        .catch(err => console.log(err))
})


module.exports = router;

