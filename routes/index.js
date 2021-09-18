const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

/* GET home page */
router.get("/", movieController.home);

router.get("/movies", movieController.listMovies);

router.get("/:movieID", movieController.movieById);

module.exports = router;
