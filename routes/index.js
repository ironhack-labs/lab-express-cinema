const express = require('express');
const router = express.Router();
const movieController = require("../controllers/movies.controller")

/* GET home page */
router.get('/', movieController.listMovies);

module.exports = router;
