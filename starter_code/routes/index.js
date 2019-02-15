const express = require('express');
const router  = express.Router();
const Movie= require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',(req,res,next) =>{
 
Movie.find().then(moviesFromDB => {
res.render('movies',{myList:moviesFromDB})
})
});

router.get('/movies/:id',(req,res,next)=>{
Movie.findOne ({ '_id': req.params.id}) 
.then (theMovie =>{
console.log(theMovie)
  res.render('SeeMore',{seeMore: theMovie})
})
});




module.exports = router;
