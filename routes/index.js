const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')

// require('../configs/db.config.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {
    
    Movie.find({})
        .then((result)=>{
            res.render('movies', {movies: result})
        })
        .catch((error)=>{
            console.log(error)
        }) 
})

router.get('/seeMore/:_id', (req, res) => {

    Movie.findById(req.params._id)
    .then((result)=>{
        res.render('seeMore', {movie: result})
    })
    .catch((error)=>{
        console.log(error)
    }) 
})



module.exports = router;
