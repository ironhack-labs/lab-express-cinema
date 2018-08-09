var express = require('express');
const Movie = require('../models/movie')
var router = express.Router();

/* GET movies page. */

router.get('/', function (req, res, next) {
  Movie.find({})
  .then((movies)=>{
    
    res.render('movies', { movies });
  })
  .catch((error)=>{
    next(error);
  })

});



/* GET movies ID page. */
router.get('/:id' , function(req,res,next){
  const {id} = req.params;
  Movie.findById(id)
  .then((MovieData)=>{
  res.render('movie', {MovieData});
  })
  .catch((error)=>{
  next(error);
  })
});


module.exports = router;
