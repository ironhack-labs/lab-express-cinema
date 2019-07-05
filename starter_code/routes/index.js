const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/movies', (req, res, next) => {
//   res.render('movies');
// });

router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((theThingWeGetBackFromDB)=>{
    // res.send(theThingWeGetBackFromDB)
    console.log(theThingWeGetBackFromDB);
    res.render('movies', {allMovies: theThingWeGetBackFromDB});
  })
  .catch((err)=>{
    next(err);
  })
})

router.get('/movies/:ref', (req, res, next)=>{
  let theID = req.params.ref;
  Movie.findById(theID)
  .then((oneMovie)=>{
    res.render('movieDetails', {theMovie: oneMovie})
  })
  .catch((err)=>{
    next(err);
  })
})




module.exports = router;