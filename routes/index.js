const express = require("express");
const router = express.Router();
const movieController = require("./../controllers/movieController");

// 2. RUTAS DE LA URL BASE
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));
router.get("/movies", movieController.getAllMovies);

router.get("/:movieID", movieController.getMovie)
module.exports = router;
