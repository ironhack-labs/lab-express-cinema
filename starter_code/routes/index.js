const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.get('/movies', (req, res, next) => {
    Movie.find({})
    .then(moviesFound => res.render('movies', {moviesFound}))
    .catch(error =>{
        console.log('Ha habido error', error);
    })
});

module.exports = router;
