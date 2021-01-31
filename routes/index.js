const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
    
    Movie.find()
    .then(( mov =>{
        mov.forEach (movie => console.log(`movie added : ${movie.title}`))
        res.render('movies',{movies: mov})
    }))
    .catch(error => console.log(error))
});

module.exports = router;
