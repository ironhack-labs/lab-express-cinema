const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')


router.get('/', (req, res, next) => {
  Movies.find()
  .then((moviesdata) => {
    res.render('movies', { moviesdata } )
    console.log(moviesdata);
  })
  .catch((err)=>{
    console.log(err)
  })
});


module.exports = router;