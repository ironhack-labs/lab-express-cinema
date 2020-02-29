const express = require('express');
const Movies = require('../models/Movie');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('movies');
});

module.exports = router;