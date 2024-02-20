const express = require('express');
const movie = require('../controllers/movies.controller')

const router = express.Router();

router.get('/', (req, res) => res.redirect('/misc'));
router.get('/misc', movie.index);
router.get('/list', movie.list);
router.get('/misc/:id', movie.detail);

module.exports = router;