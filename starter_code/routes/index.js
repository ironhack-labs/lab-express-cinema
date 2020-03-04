const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  console.log('ENTRON EN INDEX');
  res.render('index');
});

module.exports = router;
