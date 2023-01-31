const express = require('express');

const router = express.Router();

const common = require('../controllers/common.controller');
const movies = require('../controllers/movies.controller');

router.get('/', common.home);
router.get('/movies', movies.list);
router.get('/movies/:id', movies.detail);

module.exports = router;