const express = require('express');
const router  = express.Router();
const mov   = require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req,res)=>{
mov.find()
    .then(muvis => {
      res.render('movies',{muvis})
    })
    .catch((error) => {console.log(error)})
})




router.get("/movie/:id",( req , res )=>{
  mov.find({_id: req.params.id})
  .then(movie => {
    res.render("movie", {movie})
  }).catch(error => console.log("no hice nada."));
})
module.exports = router;
