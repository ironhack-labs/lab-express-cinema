const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



module.exports = router;

