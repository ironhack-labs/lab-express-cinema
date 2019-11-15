const express = require('express');
const router = express.Router();

/* get movies page */
router.get('/movies', (req, res, next) => {
  res.render('movies');
});

module.exports = router;
