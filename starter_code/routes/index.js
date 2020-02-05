const express = require('express');
const router  = express.Router();
const movieModel = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movieModel.find().then(dbRes => {
    const data = dbRes;
    res.render('movies', {data}
  )}
  ).catch(err => console.log(err))
  
});

module.exports = router;
