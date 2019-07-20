const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next)=>{
  Movies.find()
  .then(movies=>{
    res.render('movies',{movies})
  })
  .catch( error => console.log('error', error))
})
router.get('/movieDetail/:id',(req, res, next)=>{
  console.log('son los params', req.params)
  const { id } = req.params
  Movies.findById(id)
  .then(movie=>{
    console.log('Mi movie!!!',movie)
    res.render('movieDetail',movie)
  })
  .catch( error => console.log('error', error))
})
module.exports = router;
