const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((response)=>{
        res.render('../views/movies/movies.hbs',{
            Movies: response
        })
        console.log(response);
    })
    .catch((err)=>{
        next(err);
    })
})

module.exports = router;
