const express = require('express');
const router  = express.Router();
// const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next)=>{
  movie.find()
  .then((stuffIGetBackFromDb)=>{
    res.render(stuffIGetBackFromDb);
  })
  .catch((err)=>{
    console.log(err);
  })
})






module.exports = router;

