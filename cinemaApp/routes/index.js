const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js'); // Import of the model Recipe from './models/Recipe'
const data = require('../bin/seeds.js');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({}).then(films=> {
    res.render('movies', { films })
});

})
router.get('/info/:id', (req, res, next) => {
  Movie.findById(req.params.id).then(b => {
    console.log("This is the data")
    console.log(b)
    res.render('info', {b})
});

})
// Movie.insertMany(data).then(a =>{
//   console.log(a)
// })
module.exports = router;
