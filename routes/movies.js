const router = require("express").Router();
const Movie = require("../model/movies.model");



router.get("/", (req, res, next) => {
    Movie.find()
    .then(resultsFromDB => {
        console.log(resultsFromDB);
        res.render("movies", {movies: resultsFromDB})
    })
        .catch();
})

module.exports = router;