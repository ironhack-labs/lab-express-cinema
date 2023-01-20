const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies', {moviefromDB: movies});
        })
        .catch(error => console.log('Error while getting the movies from the DB: ', error))
})

router.get('/movie/:id', (req, res, next) =>{
    Movie.findById(req.params.id)
    .then(movie => {
        res.render("movieDetails", {movie})
})
.catch(error => console.log("Error!", error))
})

module.exports = router;
