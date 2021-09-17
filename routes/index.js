const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");
const moviesController = require("../controllers/movies.controller");

/* GET home page */
router.get("/", homeController.showHome);

router.get("/movies", moviesController.listMovies);

router.get("/movie/:movieId", moviesController.singleMovie);

module.exports = router;
