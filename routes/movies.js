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
    .catch((err) => {
        console.log(err);
        next(err);
    });
});

router.get('/movies/:id', function (req, res, next) {
    console.log(req.params.id);
    MoviesModel.findById(req.params.id)
    .then((dbRes) => {
        console.log("Movie infos ok");
        res.render("eachmovie.hbs", {dbRes});
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
});

module.exports = router;