const express = require('express');
const router = express.Router();
const movieModel = require("../Models/Movie")

/* GET home page */

router.get('/movies', (req, res) => {
    movieModel
        .find()
        .then(dbResp => {
            console.log(dbResp[0])
            res.render("movies", {
                movies: dbResp
            })
        })
})

router.get("/movies/:_id", (req, res) => {
    movieModel
        .findOne()
        .then((dbRes) => {
            console.log(dbRes)
            res.send("info", {
                movie: dbResp
            })
        })
})


module.exports = router;