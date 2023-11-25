const express = require("express");
const router = express.Router();
const miscController = require("../controllers/misc.controller");
const moviesController = require("../controllers/movies.controller");

/* GET home page */
router.get("/", miscController.getHome);
router.get("/movies", moviesController.getMovies);
router.get("/movies/:id", moviesController.getMovieDetail);
module.exports = router;
