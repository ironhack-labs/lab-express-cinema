const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

router.get('/movies', moviesController.list);

module.exports = router;