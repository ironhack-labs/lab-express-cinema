const express = require('express');
const router = express.Router();

router.get('/movie/:movieId', (req, res, next) => res.render('movie'));

module.exports = router;