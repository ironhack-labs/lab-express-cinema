// GET movies page
const express = require("express")
const router = express.Router()

const MovieModel = require("./../models/Movie.model")

router.get('/', (req, res, next) => {
    MovieModel.find()
    .then((dbRes) => {
        res.render("movies", {movie: dbRes});
    })
    .catch(error => console.log(error))
});

module.exports = router;