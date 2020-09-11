const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies',(req, res) => {
    Movie.find()
    .then(allMovies => res.render('movies', { movie: allMovies }))
    .catch(err => console.log("Error",err))
})

router.get('/movie-details/:id', (req,res) => {
    //req.params.id
    const id = req.params.id
    Movie.findById(id)
    .then(movieDetails => res.render('movie-details', { movieDetails} ))
    .catch(err => console.log("Error",err))
})


module.exports = router
