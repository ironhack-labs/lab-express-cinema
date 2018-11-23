const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies',(req,res)=>{
    Movie.find()
        .then(movies =>{
          console.log(movies)
          res.render('movies',{movies})
        })
        .catch(err => res.render('index'))
})

router.get('/movieDetail/:id',(req,res)=>{
  const {id} = req.params
  Movie.findById(id)
      .then(movie => res.render('movieDetail',movie))
      .catch(e => res.render('index'))
})

module.exports = router;
