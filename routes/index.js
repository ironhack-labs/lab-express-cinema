const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res,next) => {
    Movie.find()
      // -> allTheBooksFromDB is a placeholder, it can be any word
      // |
      .then(allTheMoviesFromDB => {
        res.render("movies",{movie:allTheMoviesFromDB});
    })
      .catch(error => {
        console.log('Error while getting the books from the DB: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

  router.get('/movies/:idMovie',(req,res,next)=>{
    const idMovie = req.params.idMovie;
    Movie.findOne({_id:idMovie}).then(theMovie=>{
      console.log(theMovie);
      res.render("movie-detail",{movie:theMovie});
    }).catch(err=>console.log(err));

  });

module.exports = router;
