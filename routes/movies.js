const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model")

router.get("/movies", async (req, res, next) => {
    res.render("movies", {
        movies: await MovieModel.find(),
    })
});

module.exports = router;
