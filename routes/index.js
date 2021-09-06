const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
       .find()
       .then(theMovies => {

           res.render('movies.hbs', { movie: theMovies }); 
         })
         .catch(error => {
           console.log('Error while getting the movies from the DB: ', error);

           next(error);
         });
     });
router.get('/movie/:id',(req,res)=>{
    const movieId = req.params.id;
    Movie
    .findById(movieId)
    .then(theMovies =>{
        res.render('movie-details',{theMovies:theMovies})
    })
    .catch(error =>{
        console.log('Error while getting the id',error)
    })
})

module.exports = router;
