// GET movies page
const express = require("express")
const router = express.Router()

const MovieModel = require("./../models/Movie.model")

router.get('/', (req, res, next) => {
    MovieModel.findById(req.params.id)
    .then((dbRes) => {
        res.render("movie", {theMovie: dbRes});
    })
    .catch(error => console.log(error))
});

module.exports = router;