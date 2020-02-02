const express = require('express');
const router  = express.Router();
const moviesRoutes = require('./movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

moviesRoutes(router)

module.exports = router;
