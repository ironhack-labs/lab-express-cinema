const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */



router.get("/", (req,res, next) => Movie.find().then((allthemovies) => { console.log(allthemovies),res.render("movies",{movie:allthemovies})}));


module.exports = router;
