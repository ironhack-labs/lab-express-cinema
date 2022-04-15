const express = require("express");
const { render } = require("express/lib/response");
const router = express.Router();

const Movie = require("./../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//pagina de movies

router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((movies) => {
            res.render("movies", { movies });
        })
        .catch((err) => console.log(err));
});

router.get("/movies/:movies_id", (req, res, next) => {
    const id = req.params.movies_id;

    Movie.findById(id)

        .then((singlemovie) => {
            res.render("single-movie", { singlemovie });
        })
        .catch((err) => console.log(err));
});

module.exports = router;
