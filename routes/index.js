const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(data => {
            res.render('movies', { data })
        })
        .catch(err => console.log('error'))
})

router.get('/movies/:movie_id', (req, res) => {
    const { movie_id } = req.params
    Movie
        .findById(movie_id)
        .then(movie => {
            console.log('---------------------', movie)
            res.render('details', { movie })

        })
        .catch(err => console.log('error'))
})
module.exports = router;
