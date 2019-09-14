const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// Get movies page
router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find()
  // .then(movies) => {
  res.render('movies', { movies })
})
// .catch(err) => {
//   next(err);
// })

// Get single movie page
router.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params
  const movie = await Movie.findById(id)
  // .then(oneSingleMovie)=>{
  res.render('oneSingleMovie', movie)

  // .catch(err)=>{
  //   next(err);
  // }
})
module.exports = router;
