const express = require('express');
const router = express.Router();

/* GET movies page */
router.get('/movies', (req, res, next) => res.render('movies.hbs'));

module.exports = router;