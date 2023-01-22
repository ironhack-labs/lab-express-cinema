const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */

router.get("/", (req, res, next) => {
  res.render("index");
});



router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((response) => {
            const moviesFromDB = response
            console.log(moviesFromDB)
            res.render('movies', {moviesFromDB})
        })
    .catch(e=>{ console.log(e, 'error getting movies from database')})
})
  
router.get("/movies/:id", (req, res, next) => {
    const id = req.params.id
    console.log('id:', id)
    Movie.findById(id)
        .then((response) => {
            const movie = response
            console.log(movie)
            res.render('movie', movie)
    })
    .catch(e =>console.log(e, 'error getting movie from DB'))
})


module.exports = router;
