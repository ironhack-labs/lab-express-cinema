const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log('entrando home');
  res.render('index');
});

module.exports = router;
