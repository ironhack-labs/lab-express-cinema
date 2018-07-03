const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.list);
router.get('/:id', moviesController.detail);

module.exports = router;