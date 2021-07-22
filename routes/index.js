const express = require('express');
const router = express.Router();
const movie = require("../models/Movie.model");
const mongoose = require("mongoose");


/* GET home page */
router.get('/', (req, res, next) =>  {
res.render('index.hbs');
});



module.exports = router;




