const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;




router.get('/movies', (req, res, next) => {

  res.render('movies');
})