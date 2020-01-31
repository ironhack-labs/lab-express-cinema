const express = require('express');
const router  = express.Router();
const Movies = require("../bin/seeds");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
