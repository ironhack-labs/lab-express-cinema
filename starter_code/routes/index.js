const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  res.render('movies', { movies });
});

module.exports = router;
