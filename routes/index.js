const express = require('express');
const router = express.Router();
const Movies = require("../models/movies.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
    .then((allMovies) =>{
        res.render('movies', {movies: allMovies})
    })
    .catch((error)=>{
        console.log(error);
        next(error);
    })
});

module.exports = router;
