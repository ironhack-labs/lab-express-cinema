const express = require('express');
const router = express.Router();

const movies = require('../models/movie.model') 


router.get('/movies', (req, res) =>  res.render("movies"));

module.exports = router;