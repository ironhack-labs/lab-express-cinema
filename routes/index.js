const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
        res.render('index')
        console.log("asda")
})

router.get('/movies', async (req, res, next) => {
    const movies = await Movie.find()
    movies.forEach(e=>console.log(e.title))
    res.render("movies", {movies})
    
})
router.get("/movie/:id", async (req, res) => {
    console.log("movie/:id")
    const {id} = req.params
    const movie = await Movie.findById(id)
    console.log(`This is the movie youre lookin 4: ${movie.title}`)
    res.render("movieDetails", movie)
})



module.exports = router;