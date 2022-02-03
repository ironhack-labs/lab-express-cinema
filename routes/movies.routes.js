const express = require('express');
const router = express.Router();

const movies = require('./../models/Movie.model')

///movies list

router.get('/movies', (req, res, next) => res.render('movies'))
// router.get('/', (req, res, next) => res.render('index'));

module.exports = router