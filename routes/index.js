const express = require('express');
const router = express.Router();


const Movie = require('./../models/Movie.model.js')

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/movies", (req, res, next) => {

    Movie
        .find()
        .select({ title: 1, image: 1, director: 1, stars: 1, })
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get("/details/:movies_id", (req, res, next) => {

    const { movies_id } = req.params
    Movie
        .findById(movies_id)
        .then(moviesData => {

            res.render('details', { moviesData })

        })
        .catch(err => console.log(err))
})





module.exports = router;
