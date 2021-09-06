const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
