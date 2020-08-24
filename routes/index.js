const express = require('express');
const router = express.Router();

// const movieModel = require("../models/Movie")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
