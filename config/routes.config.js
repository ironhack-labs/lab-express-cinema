const express = require('express');
const router = express.Router();

const commonController = require('../controllers/common.controller')
const movieController = require('../controllers/movie.controller')

router.get('/', commonController.home);
router.get('/movies', movieController.list)
router.get('/movies/:id', movieController.detail)

module.exports = router;