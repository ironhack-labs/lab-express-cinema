const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res) => {
  // PAGER
  const {page = 0} = req.query;
  let limit = 5;
  let skip = page* limit;
  //
  Movies.find()
  .limit(limit)
  .skip(skip)
  // http://localhost:3000/books/?page=1
  .then(movies => {
    res.render('movies', { movies })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/movie/:id', (req, res) => {
  const {id} = req.params;
  Movies.findById(id)
  .then(movie => {
    res.render('movie', movie)
  })
})

module.exports = router;
