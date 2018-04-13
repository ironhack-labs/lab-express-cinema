const express = require('express');
const router  = express.Router();
const debug = require("../log")(__filename);

const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  Movie.find().then( movies =>{
    debug(movies)
    res.render('movies', {movies});
  })
});


module.exports = router;
