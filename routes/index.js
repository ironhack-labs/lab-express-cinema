const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('movies-result', { movies }))
        .catch(err => console.log(err))

    //res.render('movies-result', { movies }


})

router.get('/details/:_id', (req, res) => {
    const { _id } = req.params

    Movie
        .findById(req.params._id)
        .then(movies => res.render('details-result', movies))
        .catch(err => console.log(err))

    //res.render('movies-result', { movies }

    //res.render('details-result', { movies })


})
module.exports = router;
