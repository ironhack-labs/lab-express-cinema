const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

router.get('/', (req, res) => res.render('index'));

router.use('/movies', (req, res) =>{
    Movie
        .find()
        .then(movies => res.render('movies', {movies}) )
        .catch(err => console.log(err))
})

router.use('/movie/:id', (req, res) => {
    const {id} = req.params
    Movie
        .findById(id)
        .then(theMovie => res.render('movie', theMovie))
        .catch(err => console.log(err))
})

module.exports = router;
