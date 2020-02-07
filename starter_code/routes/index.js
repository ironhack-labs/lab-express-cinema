const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie.js")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  
  Movie.find()
  .then(moviesFound =>{
        res.render('movies',{moviesFound})
       });
})

router.get('/movie/:id',(req,res)=>{
  Movie.findById(req.params.id)
  .then(movieFound =>{
        res.render('movie',movieFound)
       });
})


module.exports = router;
