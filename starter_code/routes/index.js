const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Cinema | Home' });
});

router.get('/movies', (req, res, next) => {
  res.render('movies', { title: 'Cinema | Movies' });
});

module.exports = router;
