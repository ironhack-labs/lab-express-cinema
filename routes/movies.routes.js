const Movie = require("../models/Movie.model");

const router = require("express").Router();

router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((movieArr) => {
            res.render("movies", {movieArr});
        })
        .catch(err => {
            console.log("error getting books from DB", err)
            next(err);
        });
});


router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movieById) => {
        console.log(movieById);
        res.render("one-movie", {movieById});
    })
    .catch(err => {
        console.log("error getting books from DB", err)
        next(err);
    })
});


module.exports = router;