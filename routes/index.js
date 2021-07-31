const express = require('express');
const router = express.Router();

const Movie = require("../models/movie.models.js")
//require movie model



/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get("/movies", (req, res)=>{

    
    
    Movie.find().then(moviesFromDB=>{res.render("movies",{movies: moviesFromDB});
    

    })
})

router.get("/movies/:movieID", (req,res) => {
    Movie.findById(req.params.movieID).then(movie=>{
        res.render("movie-detail", {movie})
        console.log(movie.stars)
    })
})


module.exports = router;
