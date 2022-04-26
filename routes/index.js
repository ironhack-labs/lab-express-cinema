const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get('/movies', (req, res, next)=> {
    Movie.find()
    .then(Movies => {
        console.log(Movies)
        res.render('movies', {Movies})
    })
    .catch(err => console.log(err))
    
    
});

router.get('/movies/:id', (req, res, next) => {

    Movie.findById(req.params.id)
    .then(pelicula =>{
        res.render('movie', {pelicula})
    })
    .catch(err => console.log(err))
    
})

