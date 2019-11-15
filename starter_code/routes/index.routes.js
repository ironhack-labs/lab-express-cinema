const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.models')

/* GET home page */
router.get('/', (req, res) => res.render('index'));


module.exports = router;