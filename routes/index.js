const express = require('express');
const router = express.Router();
const {
    getIndex,
    getMovies,
    getMovie
} = require("../controllers/movies.controller");

router.get("/", getIndex).get("/movies", getMovies).get("/:movieId", getMovie);

module.exports = router;
