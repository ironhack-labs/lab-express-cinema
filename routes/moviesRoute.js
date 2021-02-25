const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model")


router.get('/movies', (req, res, next) => {
    MovieModel.find()
    .then((successShow)=>{
        res.render("movies", {movies: successShow})
    }).catch((error)=>{
        console.log(error)
    })
})

module.exports = router;