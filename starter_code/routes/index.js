const express = require('express');
const router  = express.Router();
const Movie = require('./../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/movies', async (req, res)=>{
  const movies = await Movie.find()
  res.render('movies',{movies})
})


router.get('/movie/:id', async (req, res)=>{
  const movie = await Movie.find({_id: req.params.id})
  res.render('movie',{movie})
})
module.exports = router;
