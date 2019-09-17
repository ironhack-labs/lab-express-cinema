const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res,next) => {
  Movie.find()
  .then(data => {
    console.log(data)
  res.render('movies', {data})
  }) 
  .catch(errorCallBack => {
      console.log(errorCallBack)
  })
})
module.exports = router;
