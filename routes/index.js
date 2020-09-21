const express = require('express');
const router = express.Router();
const MoviesModel = require("../models/Movies.models")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res) => {
    const movie = await MoviesModel.find(); // wait
    res.render("movies", { movie });
});

module.exports = router;
