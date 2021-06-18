const express = require('express');
const router = express.Router();

const filmController = require("../controllers/film.controller")

/* GET home page */
router.get('/', filmController.homePage);
router.get('/movies', filmController.showMovies);
router.get("/movies/:id", filmController.movieInformation);

module.exports = router;
