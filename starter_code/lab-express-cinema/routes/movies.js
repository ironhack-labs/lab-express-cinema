var express = require('express');
var router = express.Router();
var movie = require('../models/movie.js');

/* GET home page. */


router.get('/', function(req, res, next) {

  movie.find()
  .then(result =>{
    res.render('movies', { tabtitle: 'Movies' , "movies": result});
    })
  .catch(error => {
    console.log(error);
  })

});

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  movie.findById(id)
  .then(movie => {
    res.render('moviedetail', {tabtitle: movie.title, movie: movie})
  })
  .catch(error => {
    console.log(error);
  })
})



module.exports = router;
