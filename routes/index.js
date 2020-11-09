const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.models");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find({})
    .then((moviesFromDB) => { 
        res.render("movies", { movie: moviesFromDB })
    })
    .catch((err) => console.log(`failed to load the /movies pages: ${err}`))
});

router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
    .then((movieFromDB) => { 
        console.log(`Here we will show the movie: `, movieFromDB);
        res.render("movie-details", movieFromDB )
    })
    .catch((err) => console.log(`failed to load the /movie's page: ${err}`))
})

module.exports = router;
