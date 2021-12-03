const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
// console.log('home')


/* GET movies page */
router.get('/movies', async (req, res) => {
    try{
        const movies = await Movie.find()
        console.log(movies)
        res.render('movies', {movies})
    }catch(err) {
        console.log("error")
    }
})


/* GET movie page */
router.get('/movies/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id)
        res.render("movie-details.hbs", {movie})
    }catch(err) {
        console.log("error")
    }
});


module.exports = router;