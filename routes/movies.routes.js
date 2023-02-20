const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model.js");

//GET movies route
router.get("/movies", (req, res, next) => {
    Movie.find()
      .then(allMoviesFromDB => {
        //console.log('Retrieved movies from DB:', allMoviesFromDB);

        res.render("movies", {movies: allMoviesFromDB, layout: false});
      })
      .catch(error => {
        console.log("Error retrieving movies from DB: ", error);
        next(error);
      });
});

//GET movies details route
router.get("/movies/:id", (req, res) => {
    const {id} = req.params;
    Movie.findById(id)
        .then(movie => {
            console.log(movie)
            res.render("details", {movie, layout: false});
        })
        .catch((error) => console.log ("Error fetching movie details: ", error));
})

module.exports = router;