const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET movies page */
router.get('/', (req, res, next) => {
    Movie.find({}, {title: 1, image: 1})
    .then((movie)=>{
        res.render('movies', {movie})
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
})

router.get('/details/:id', (req, res, next) => {
    const movieId = req.params.id
    Movie
    .findById(movieId)
    .then(oneMovie => res.render('movie-details', oneMovie))
    .catch(err => console.log(err))
})

module.exports = router;