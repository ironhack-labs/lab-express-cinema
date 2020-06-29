const express = require('express');
const { render } = require('../app');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
