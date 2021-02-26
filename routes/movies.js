const express = require('express');
const router = express.Router();

const MoviesModel = require('../models/movie.model') 


router.get('/movies', function (req, res, next) {
    console.log(req.params);
    MoviesModel.find()
    .then((dbRes) => {
        console.log(dbRes);
        res.render("movies.hbs", {movie: dbRes})
    })
    .catch((err) => console.log(err))
});

router.get('/movies', function (req, res, next) {
    console.log(req.params);
    MoviesModel.find()
    .then((dbRes) => {
        console.log(dbRes);
        res.render("movies.hbs", {movie: dbRes})
    })
    .catch((err) => console.log(err))
});

module.exports = router;