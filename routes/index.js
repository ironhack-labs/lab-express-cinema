const express = require('express');
const router = express.Router();

const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    Movies.find()
        .then((allMovies) => {
            console.log(allMovies)
            res.render('movies', { movies: allMovies })
        })
        .catch((error) => {
            console.log(error);
            next(error);
        })
});

router.get("/movies/:id", (req, res) => {

    Movies.findById(req.params.id)
        .then((movie) => {
            console.log("qqqqq" + movie)
            res.render('detailsMovie', { movies: movie });

        })
        .catch((error) => {
            console.log(error);
            next(error);
        })

})

module.exports = router;



