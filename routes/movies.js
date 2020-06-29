const express = require('express');
const Movie = require("../models/Movie.model");
const router = express.Router();

router.get("/movies", (req, res) =>{
    Movie.find().then(moviesFromDataBase => {
        console.log(moviesFromDataBase)
        res.render("movies", { moviesList: moviesFromDataBase});
    }).catch(err => {
        console.log(err); 
    })
})

module.exports = router; 