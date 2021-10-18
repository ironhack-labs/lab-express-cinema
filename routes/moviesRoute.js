const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get("/movies", (req, res, next) =>{
    Movie.find()
    .then((allMoviesFromDB)=>{
        //console.log("Movies from DB:", allMoviesFromDB)
        
        const data = {
            moviesArr: allMoviesFromDB
        }
        
        res.render("movies/movies", data)
    })
    .catch((err)=> {
        console.log("ups, an error has been detected displaying a list of all movies", err)
        next (error);
    })
})


router.get("/movies/:movieId",  (req, res, next)=>{
    Movie.findById(req.params.movieId)
    .then((movieFromDB) => {
        // console.log(movieFromDB)
        res.render("movies/movies-details", movieFromDB)
    })
    .catch((err) => {
        console.log("ups, an error has been detected displaying the details of a singel movie", err)
        next (error);
    })
})