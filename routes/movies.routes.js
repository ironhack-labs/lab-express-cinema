const Movie = require("../models/movie.model");
const router = require("express").Router();

router.get("/movies", (req,res,next) => {
    Movie.find()
        .then((movieArr) => {
            res.render("movies", {movieArr})
        })

        .catch(err => console.log("there is an error",err))
})



router.get("/movies/:moviesId", (req,res,next) => {
        Movie.findById(req.params.moviesId)
        .then((movieById) => {
            res.render("movie-details", {movieById})
        })
        .catch(err => console.log("there is an error with movie details",err))
})


module.exports = router;