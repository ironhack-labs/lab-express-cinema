const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies/:movieId',(req,res)=>{
    console.log(req.params)
    Movie.findById(req.params.movieId)
    .then((result)=>{
        console.log(result)
        res.render('movie-details',result)
    })
})

router.get('/movies',(req,res)=>{
    Movie.find()
    .then((result)=>{
        console.log(result)
        res.render('movies',{result})
    })
})




module.exports = router;
