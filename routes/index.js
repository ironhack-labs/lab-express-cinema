const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((response)=>{
        res.render('./movies/movies.hbs',{
            Movies: response
        })
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/movies/:id', (req, res, next) => {
    let {id} = req.params
    Movie.findById(id)
    .then((response) => {
        res.render('./movies/each-movie.hbs', {
            eachMovie: response
        })
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router;
