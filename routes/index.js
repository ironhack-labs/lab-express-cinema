const express = require('express');
const router = express.Router();

const movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next) => {
    console.log(req)
    movie
    .find()
    .then((allMovies) =>{
        res.render('movies',{ movies: allMovies})
    })
    .catch(err=>{
        console.log(err)
    })
    
    
})

router.get('/movies/:id',(req,res,next) =>{
    // console.log(req.params)
    movie
    .findById(req.params.id)
    .then(movie =>{
        res.render('movie-details',  movie )
    })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;
