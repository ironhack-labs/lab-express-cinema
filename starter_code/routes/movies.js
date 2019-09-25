const express = require("express")
const router  = express.Router();
const Movie = require("../models/movie.js");

/* GET all movies */
router.get("/movies", (req, res)=> {
    Movie.find({})
        .then((movies) => {
            res.render("movies", {movies})
        })
        .catch((err)=> {
            res.send(err)
        })
})

/* GET one movie */
router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render('movie', {movie})
    })
    .catch((err) => {
        res.send(err)
    })
});

module.exports = router;
