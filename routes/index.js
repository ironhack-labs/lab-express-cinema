const express = require('express');
const router = express.Router();

const movieModel = require("./../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    movieModel.find()
    .then((dbResult) => {
        res.render('movies', {
            movies: dbResult,
        });
    }).catch(error => next(error));
});

router.get("/movies/:id", (req, res, next) => {
movieModel.findById(req.params.id)
    .then((dbResult) => {
        res.render("details", {
            oneMovie: dbResult,
    });
}).catch(error => next(error));
});

router.get("/movies/delete/:id", (req, res, next) => {
    movieModel.findByIdAndDelete(req.params.id)
        .then((dbResult) => {
            res.redirect("/movies");
    }).catch(error => next(error));
});

module.exports = router;
