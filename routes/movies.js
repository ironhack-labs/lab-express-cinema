const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

// GET /movies page
router.get("/", (req,res) => {
    Movie.find()
    .then((allMovies) => {
        console.log(allMovies.length)
        res.render('movies', {movies: allMovies})
    })
    .catch((error) => console.log(error))
})

router.get("/:id", (req,res) => {
    const {id} = req.params;
    console.log(id)
    Movie.findById(id)
    .then((movie)=>{
        console.log(movie)
        res.render('movieProductPage', {movie})
    })
    
})

module.exports = router;