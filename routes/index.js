const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');// import the 'User' model

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');

})


router.get('/movies', (req, res) => {
    Movie.find()
        .then(allMovies => {
            console.log('allMovies', allMovies);
            res.render('movies', { allMovies });
        })
        .catch(err => console.log(err))
})



  router.get('/movie/:movieId', (req, res) => {
    const { movieId } = req.params
    console.log(req.params)
    Movie
        .findById(movieId)
        .then(movie => res.render('movie', movie))
        .catch(err => console.log(err))
    })
    



module.exports = router;
