const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//crear movies page----movies list

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})

//router de details 
router.get('/movies/:movieId', (req, res) => {

    const { movieId } = req.params

    Movie
        .findById(movieId)
        .then(movieFromDB => {
            res.render('movie-details', movieFromDB)
        })
        .catch(err => console.log(err))

})



module.exports = router;
