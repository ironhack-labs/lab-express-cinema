const express = require('express');
const { get } = require('mongoose');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies/list', (req, res) => {

    Movie
        .find()
        .then(movieDb => {
            // console.log(movieDb)
            res.render('movies', { movieDb })

        })

})
router.get('/movies/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movieDb => {
            console.log(movieDb)
            res.render('details', { movieDb })

        })

})

module.exports = router;
