const express = require('express');
const router = express.Router();
const movieModel = require("./../models/movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));




module.exports = router;
