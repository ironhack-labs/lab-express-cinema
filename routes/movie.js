// GET movies page
const express = require("express")
const router = express.Router()

const MovieModel = require("./../models/Movie.model")

router.get('/movie/:id', (req, res, next) => {
    MovieModel.findById(req.params.id)
    .then((dbRes) => {
        console.log(dbRes)
        res.render("theMovie", {theMovie: dbRes});
    })
    .catch(error => console.log(error))
});

module.exports = router;