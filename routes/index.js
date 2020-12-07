const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => {
    // console.log('here'),
    res.render('index')
});


// Iteration 3 | List the Movies
router.get('/movies', async (req, res, next) => {
    console.log("here");
    try{
       const movies = await MovieModel.find();
    //    console.log(movies);
       res.render('movies', {movies}) ;
    } catch (err) {
        next(err);
    }
})

// Iteration 4 | Display Movie Details
router.get('/movies/:id', async (req, res, next) => {
    try{
       const movie = await MovieModel.findById(req.params.id);
       res.render('movie-detail', movie);
    } catch (err) {
        next(err);
    }
})




module.exports = router;
