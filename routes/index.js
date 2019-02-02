const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const title = 'Ironhack Cinema';
  res.render('index', { title });
});

module.exports = router;
