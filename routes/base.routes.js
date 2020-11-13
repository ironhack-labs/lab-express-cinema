const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model');

// Endpoints
router.get('/', (req, res) => res.render('index'))

module.exports = router
