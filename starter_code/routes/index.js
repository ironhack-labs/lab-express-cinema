const express = require('express');
const router  = express.Router();
const Movie = require('../model/Movie')
// const app = express();
// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname+'/views/partials')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//GET the movies page;
router.get('/movies',(req,res,next)=> {
  Movie.find()
    .then(movies => {
      res.render('movies',{movies});
    })
    .catch(err => console.error(err));
})

//GET the movie detail page;
router.get('/movie/:movieId',(req,res,next)=> {
  Movie.findById(req.params.movieId)
    .then(movie => {
      console.log(movie);
      res.render('movie-info',movie)
    })
    .catch(err => console.error(err));
})

module.exports = router;
