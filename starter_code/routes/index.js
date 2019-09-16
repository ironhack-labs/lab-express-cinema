const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(allTheMoviesFromTheDB => {
    console.log(allTheMoviesFromTheDB)
      res.render('movies.hbs', {moviesToHbs: allTheMoviesFromTheDB})
  })
      .catch(err =>{
        console.error(err)
      })
      
      
})

router.get('/info/:id', async(req,res,next) =>{
  let id = req.params.id;
  let movie = await Movie.findById(id)
  res.render('details', {movie})
})


module.exports = router;
