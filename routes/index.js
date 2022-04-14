const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res) => {
    Movie
        .find()
        .then(movies => {
            console.log('Estas son las pelis', movies)
            res.render('movies', {movies})
        })
})

router.get('/movie/:id',(req,res,next) => {
    const {id} = req.params
    Movie
        .findById(id)
        .then(selectedMovie => {
            console.log('la peli es', selectedMovie)
            res.render('movie', {selectedMovie})
        })
})

module.exports = router;
