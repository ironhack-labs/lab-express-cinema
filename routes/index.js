const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movies.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//listado de movies
router.get('/movies', (req, res) => {
    
    Movie
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.log(err))

})

//
router.get('/movie/:movie_id', (req, res) => {

    const { movie_id } = req.params

    console.log("este es el id", movie_id)

    Movie
    .findById(movie_id)
    .then(theMovie => res.render('movie-details', theMovie ))
    .catch(err => console.log(err))
    
})

module.exports = router;
