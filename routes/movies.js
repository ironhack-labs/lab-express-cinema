const express = require('express');
const router = express.Router();
const movieModel = require("./../models/Movie.model");

/* GET movies */
/* router.get('/movies', (req, res, next) => res.render('movies')); */

router.get("/movies", (req, res, next) => {
    movieModel
        .find()
        .then(dbResults =>
            res.render("movies", {
                movies: dbResults
            })
        )
        .catch(next);
});

router.get("/movies/:id", (req, res, next) => {
    movieModel
        .findById(req.params.id)
        .then(dbRes => res.render("movies-details", { movie: dbRes }))
        .catch(next);
})

module.exports = router;
