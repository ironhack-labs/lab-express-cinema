const express = require('express');
const Movie = require('../models/Movie')
const router = express.Router();

router.get('/movies/:movieID', (req, res, next) =>{
    console.log('it kinda works')
    
    Movie.findById(req.params.movieID).then(moviesFromDb => {
        console.log(moviesFromDb)
        res.render('moviedetail', {
            movie: moviesFromDb
        })
    })
})

module.exports = router;