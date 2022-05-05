const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//router.use('/', require('./movies.routes'))

module.exports = router;