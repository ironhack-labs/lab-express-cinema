const express = require('express');
const router = express.Router();
const Movies = require('../models/movie.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//ir a pagina de peliculas//
router.get('/movies', (req, res, next) => {

    Movies
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
})

module.exports = router;

//params
router.get('/movies/:id', (req, res) => {
    const { id } = req.params

    Movies
        .findById(id)
        .then(movie => res.render('movie-detail', movie))
        .catch(err => console.log(err))

    //res.send('<h1>¡Mira la terminal!</h1>')
})

module.exports = router;


