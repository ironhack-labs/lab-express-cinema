const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find({}, {title: 1, image: 1})
        .then((movie)=>{
            res.render('movies', {movie})
        })
        .catch((error)=>{
            console.log(error)
            res.send(error)
        })
})

router.get('/movies/:id', (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
        .then((result) => {
            res.render('singleMovies', result)
        })
        .catch((error) => {
            res.send(error)
        })
})

module.exports = router;
