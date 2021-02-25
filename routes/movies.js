const express = require('express');
const router = express.Router();

const movies = require('../bin/seeds') 


router.get('/movies', (req, res) =>  res.render("movies"));

module.exports = router;