const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')

//lista de pelis
router.get('/', (req, res, next) => {  
  Movies.find()
  .then(movies=>{
    res.render('movies',{movies})
  })
  .catch(e=>{
    console.log(e)
    next(e)
  })
});

//detalle de pelis
router.get('/movie-detail/:id',(req,res,next)=>{
  const {id} =req.params
  Movies.findById(id)
  .then(movies=>{
    res.render('movie-detail',movies)
  })
  .catch(e=>{
    console.log(e)
    next(e)
  })
});

module.exports = router;

