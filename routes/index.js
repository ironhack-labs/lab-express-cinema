const express = require('express');
const router = express.Router();
const movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get("/movies", (req, res) => res.render("movies"))

module.exports = router;
