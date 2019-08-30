const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const data = {
    title : "Cinema IronHack"
  }
  res.render('index')
});

router.get('/home', (req, res, next) => {
  const data = {
    title : "Cinema IronHack"
  }
  res.render('index')
});

module.exports = router;
