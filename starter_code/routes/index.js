const express = require('express');
const router  = express.Router();
const movie   = require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req,res)=>{
    const muvis = movie.find()
    .then(muvis => {
      console.log(muvis);
      res.render('movies',{muvis})
    })
    .catch((error) => {console.log(error)})
})
module.exports = router;
