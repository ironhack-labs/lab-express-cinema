const router = require("express").Router();
const Movie = require("../model/movie.model");

router.get("/movies", (req, res, next) => {
    Movie.find()
        .then( moviesFromDB => {
            res.send('working')
        // res.render("movies/movies", {movies: moviesFromDB});
    })
    .catch();
});


module.exports = router;