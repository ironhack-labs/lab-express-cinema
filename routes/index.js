const express = require('express');
const Movie = require('../Models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



module.exports = router
