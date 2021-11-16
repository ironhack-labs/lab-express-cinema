const express = require('express');
const router = express.Router();
const chalk = require('chalk')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
