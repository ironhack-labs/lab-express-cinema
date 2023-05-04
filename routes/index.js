const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



//enruta a la página de las películas

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('movies', { movies: allMovies })
        })
        .catch(err => console.log(err))

})

//ruta a movie details

router.get('/movie/:id', (req, res) => {
    const id = req.params.id
    Movie
        .findById(id)
        .then((movie) => {
            res.render('movie', movie)
        })
        .catch(err => console.log(err))
})



module.exports = router;
