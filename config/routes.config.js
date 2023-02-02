const express = require("express");
const router = express.Router();

const commonController = require("../controllers/common.controller");
const moviesController = require("../controllers/movie.controller");

router.get("/", commonController.index);
router.get("/movies", moviesController.list);
router.get("/:id", moviesController.detail);

module.exports = router;
