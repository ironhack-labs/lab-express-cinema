const express = require('express');
const router = express.Router();
const movies = require("../controllers/movies.controller")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get("/movies", movies.list)

module.exports = router;
