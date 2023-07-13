const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.models')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res)=>{
    Movie.find()
    .then((allMovies)=>{
        console.log(allMovies)
        res.render('movies',{allMovies})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/movies/:id',(req,res)=>{
    Movie.findById(req.params.id)
    .then((oneMovie)=>{
        res.render('movie-info',oneMovie)
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router;
