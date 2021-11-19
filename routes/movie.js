const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET movies page */
router.get("/movie/:id", async (req, res, next) => {
    const {id} = req.params
    console.log(id);
    const movieDetails = await Movie.findById(id)
    console.log(movieDetails);
    console.log("#####################################Movie Router");
    res.render('movie', {movieDetails})
});

module.exports = router;
