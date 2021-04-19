

const express = require('express');
const router = express.Router();

const movie = require(`../models/Movie.model`)


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res) => {
    movie.find({})
    .then((result) => {
        res.render(`movies`, {movies:result})
    
    }).catch((err) => {
        console.log(err); 
    }); 
    })

module.exports = router;