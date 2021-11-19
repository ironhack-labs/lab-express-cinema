const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET movies page */
router.get("/movies", async (req, res, next) => {
    console.log("#####################################Movies Router");
    const movies = await Movie.find()
    console.log(movies);
    res.render('movies', {movies})
});

module.exports = router;
