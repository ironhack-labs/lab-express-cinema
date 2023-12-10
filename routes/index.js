const express = require('express');
const router = express.Router();
const moviesModel = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { heroTitle: "Cinema Ironhack", actionButtonLabel: "Check the movies!" }));

/* GET movies page */
router.get('/movies', (req, res, next) => {
    moviesModel.find()
    .then((movies) => {
        res.render('movies', { pageTitle: "Ironhack cinema", pageSubtitle: "Click on the movie to check the showtimes!", actionButtonLabel: "See more", movies })
    })
    .catch((err) => {
        console.error(err);
        res.render("error")
    });
});

/* GET movie-details page */
router.get('/movie/:id', (req, res, next) => {
    const id = req.params.id;
    moviesModel.findById(id)
    .then((movie) => {
        res.render('movies', { actionButtonLabel: "< Go back", movie })
    })
    .catch((err) => {
        console.error(err);
        res.render("error")
    });
});

module.exports = router;
