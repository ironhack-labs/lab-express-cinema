const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) =>{
  res.render("movies")
})

// router.get('/paco', (req, res, next) => {
//   res.render('vistapaco');
// });

module.exports = router;
