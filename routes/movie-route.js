const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')


/* GET home page */
router.get('/movies', (req, res, next) =>{
    
    Movie.find()
    .then((movieFromDB) => {
        console.log(movieFromDB);
        const moviesData = {
            moviesArr: movieFromDB
        }
        res.render('movie/movies', moviesData)
    })
    .catch(e => console.log('error with Movie from DB', e));
});

router.get("/movies/:id", (req, res, next) => {
    const id = req.params.id
    Movie.findById(id)
        .then((movieId) => {
            console.log(movieId);
            res.render('movie/movie-Id', {Movie: movieId})
        })
        .catch(e => console.log('Error with Id of Movies', e));
})

module.exports = router;
