const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model.js");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movie.find()
    .then(movies => res.render('movies', { movies }))
    .catch(error => console.log('Error while getting the celebrities from the DB: ', error))
  });

module.exports = router;
