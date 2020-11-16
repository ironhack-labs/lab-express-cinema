const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */



router.get("/", (req,res, next) => 
Movie.find().then((allthemovies) =>
res.render("movies",{movie:allthemovies}))
.catch(err => console.log('The error while searching artists occurred: ', err))
);


module.exports = router;
