const express = require('express');
const router = express.Router();

/* GET home page route */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
