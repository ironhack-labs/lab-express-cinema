const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res) => {

    Movie.find()
    .then(allMoviesFromDB=>{

        console.log(allMoviesFromDB);
        res.render('movies-list', {movies: allMoviesFromDB});

    }).catch(err=>console.log(err));

});


router.get('/movies/:movieId', (req, res) =>{

    const { movieId } = req.params;

    Movie.findOne({_id: {$eq : movieId}})
    .then(movie=>{

        res.render('movie-page',movie);


    }).catch(err=>console.log(err));




})





module.exports = router;
