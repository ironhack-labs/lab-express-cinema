const express = require('express');
const router = express.Router();

require('../db')
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    // res.send('You got it!')
    Movie
        .find()
        .then(allMovies => {
            // console.log(allMovies)
            // res.send('You got it!')
            res.render('movies', {allMovies})
        } )

})

router.get('/movie/:id', (req, res) => {
    const {id} = req.params
    // res.send(id)
    // console.log(id)
    Movie
        .find( {_id: id })
        .then( movie => {
            movie = movie[0]
            console.log(movie)
            res.render('movie-details', movie)
        })
})

module.exports = router;
