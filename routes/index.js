const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies",(req, res, next)=>{
    Movie.find()
    .then(movieItem => {
        res.render("movies", {movieItem})
    } )
    .catch(error=>console.log("Errors: ", error))
})

router.get("/movie/:movieId", (req,res,next)=>{
    const movieId = req.params.movieId
    Movie.findById(movieId)
    .then(data=>res.render("movie-details", data))
    .catch(error=>console.log("Errors: ", error))
})

module.exports = router;
