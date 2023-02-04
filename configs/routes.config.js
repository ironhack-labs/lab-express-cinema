const express = require("express");

const movies = require("../controllers/movies.controller");

const router = express.Router();

router.get('/', movies.home);
router.get('/movies', movies.list)

module.exports = router