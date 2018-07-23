var express = require('express');
const Movie = require('../models/movie')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Movie.find()
  .then(movies => {
    console.log('hugo')
    res.render('movies/list', { movies } )
  })
  .catch(error => {
    console.log(error)
  })
});

router.get('/:id', (req, res, next) => {
  const {id} = req.params;
  Movie.findById(id)
  .then(movie => {
    res.render ('movies/detail', movie)
  })
  .catch(error => {
    next(error);
  })
})



module.exports = router;
