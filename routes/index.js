const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

const moviesController = require("../controllers/movies.controller");
const miscController = require("../controllers/misc.controller");

/* GET home page */
router.get('/', miscController.home);

/* GET movies page */
router.get('/movies', moviesController.list)

/* GET movies details page */
router.get('/movies/:id', moviesController.details)

module.exports = router;
