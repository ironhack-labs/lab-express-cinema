const express = require('express');
const router = express.Router();
const filmsController = require("../controllers/movies.controller")

/* GET home page */
router.get('/', filmsController.home);

router.get("/movies", filmsController.listFilms);

router.get("/movies/:id", filmsController.showMovie)

module.exports = router;
