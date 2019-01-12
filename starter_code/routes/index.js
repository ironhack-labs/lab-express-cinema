const express = require('express');
const router  = express.Router();
const Movies = require ('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res)=>{
  Movies.find()
  .then(movies=>{
    res.render('movies',{movies})
  })
  .catch(err=>{
    console.log(err)
  })
})
router.get('/movies/:id', (req, res)=>{
  let moviesId = req.params.id
  console.log(moviesId);
  Movies.findOne({'_id':moviesId})
  .then((movies)=>{
    res.render('movies-detalle', {movies})
  })
  .catch(err=>{
    console.log(err)
  })
})

module.exports = router;
