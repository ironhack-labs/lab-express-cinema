const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { pageTitle: 'Home' }));

module.exports = router;
