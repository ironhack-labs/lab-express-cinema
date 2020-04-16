const express = require("express");
const router = express.Router();

const Movie = require('../models/Movie');

router.get("/", (req, res, next) => {
    Movie.find().then(dbRes => {
        res.render("movies", {
            movies: dbRes
        });
    }).catch(err => console.log(err));
})

router.get("/movie/:id", (req, res, next) => {
    Movie.findById(req.params.id).then(dbRes => {
        dbRes.stars = dbRes.stars.reduce((acc, val) => {
            if (acc === '') {
                return val;
            }
            return acc + `, ${val}`;
        }, '');
        dbRes.showtimes = dbRes.showtimes.reduce((acc, val) => acc + `${val} | `, '');
        res.render("movie", {
            movie: dbRes
        });
    }).catch(err => console.log(err));
})

module.exports = router;