const express = require('express');
const misc = require('../controllers/misc.controller');
const movies = require('../controllers/movies.controller');

const router = express.Router();

router.get('/', misc.home);
router.get('/movies', movies.list);
router.get('/movie/:id', movies.detail);

module.exports = router;