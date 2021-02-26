const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');




/* Read route */
router.get('/movies', (req, res, next) => {
    
    Movie
    .find()
    .then((data) => {
    // console.log(`************${data}`);
    res.render('movies.hbs', {data});
    
    }).catch(err => {
        console.log('Error while finding movies from DB: ', err);
});
});

router.get('/movie/:movieId', (req, res) => {
    
    Movie.findById(req.params.movieId)
    .then((data) => {
    console.log(`************${data}`);
    res.render('movie-details.hbs', {data});
    
    }).catch(err => {
        console.log('Error while finding movie: ', err);
});
});



module.exports = router;