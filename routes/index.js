const express = require('express');
const router = express.Router();
const Movie = require('../db/models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res)=>{
    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
    console.log(req.params)
    });
router.get('/movies/movie/:movieId', (req, res) => {
    Movie.findById(req.params.movieId)
        .then(movie => res.render('movie', movie))
        .catch(err => console.log(err))
});
    

module.exports = router;
