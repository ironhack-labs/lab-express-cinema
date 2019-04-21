const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
/*GET Movies */
router.get('/movies',(req, res, next)=>{
  Movie.find()
  .then(data => {
    res.render('movies',{ data })
    console.log(data)
})
.catch(err => console.log(err))
})

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(data => {
      res.render('seeMore', { data : data });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});

module.exports = router