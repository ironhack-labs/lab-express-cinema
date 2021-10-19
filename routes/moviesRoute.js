const router = require("express").Router();
const Movie = require("../models/Movie.model");



router.get("/movies", (req, res, next) => {
    Movie.find()
        .then( (moviesFromDB) => {
            const data = {
                moviesArr: moviesFromDB
            }
            res.render("movies/movies-list", data);
        })
        .catch( (error) => {
            console.log("Error getting list of movies from DB", error);
            next(error);
        });
});


 
module.exports = router;