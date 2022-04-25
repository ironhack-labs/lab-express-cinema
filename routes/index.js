const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));





router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((moviesFromDB) => {
            console.log(moviesFromDB);
            res.render("movies", {
                movies: moviesFromDB
            })
        })
        .catch(err => console.log("oops, there was an error" + err))

})

router.get("/movie/:id", (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
    .then((movieDetails) => {
        res.render("movie-details", movieDetails)
    })
    .catch(err => console.log("oops, there was an error" + err))
})

module.exports = router;
