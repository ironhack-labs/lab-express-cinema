const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movie', (req, res, next)=>{
  console.log('><><><><><><')
  Movie.find()
  .then(movies=>{
    console.log("da movies ----------- ", movies);
    res.render('Movie', {movies})
  })
  .catch(err =>{
    console.log('<><><><error><><><>')
  })
})

router.get('/movielist/:id', (req, res, next)=>{
    let id = req.params.id;
  Movie.findById(id).then(singleMovie =>{
    res.render('movielist', {singleMovie})
  })
  .catch(err =>{
    console.log('<><><><error><><><>')
  })
})

console.log(Movie)


module.exports = router;
