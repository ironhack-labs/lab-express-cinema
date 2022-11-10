const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
module.exports = router;


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(moviesFromDB => {
            console.log({ movies: moviesFromDB })
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})

// movies details
router.get('/movies/:id', (req, res) => {

    const { id } = req.params

    Movie
        .findById(id)
        .then(moviesFromDB => {
            res.render('details', moviesFromDB)
        })
        .catch(err => console.log(err))

})



module.exports = router;



