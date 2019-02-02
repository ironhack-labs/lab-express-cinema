const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(films =>{
      res.render('movies', { films })
    })
    .catch(error => {
      console.log(error)
    }) 
})

router.get('/movie/:id', (req, res, next) => {
 /*  console.log(req.params.id) */
  Movie.findById(req.params.id)
    .then(film => {
      res.render('movie', { film })
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router;
