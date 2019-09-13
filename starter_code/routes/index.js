const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find({}).then(allTheMovies=>{ //found all the movies in the DB

    res.render('movies', {moviesToHBS: allTheMovies})
  })

})

// router.get('/info/:id', async (req, res, next)=>{
//   let id = req.params.id;

//   let movie = await Movie.findById(id)
//   res.render('movie.hbs', {movie: theSingleMovie})
// })


router.get('/info/:id', (req, res, next)=>{
  let id = req.params.id;
  Movie.findById(id).then(theSingleMovie=>{
    res.render('movie.hbs', {movie: theSingleMovie})
  }).catch(err=>console.error(err))
})


module.exports = router;
