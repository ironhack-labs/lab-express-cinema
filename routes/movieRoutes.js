const router = require("express").Router();
const Movie = require('../models/Movie.model.js');


router.get('/movies', (req, res, next) => {
   Movie.find()
   .then((moviesFromDB) => {
    console.log("...............")
    console.log(moviesFromDB)
    const data = {
        moviesArr: moviesFromDB
    }
    res.render("movies/movies-list", data);
   })
   .catch((error) => {
    console.log("error getting list of movies from DB", error);
    next(error);
   });

});


router.get("/movies/:movieId", (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then((moviesFromDB)=>{
        res.render("movies/movie-details", moviesFromDB)
    })
    .catch((error)=>{
        console.log("error occurs", error);
        next(error);
    })
});




module.exports = router;   