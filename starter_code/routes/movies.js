var express = require('express');
var router = express.Router();

//require user model
const Movie = require('../models/Movie'); // Import of the model Movie from './models/Movie'

/* GET movies listing. */
router.get('/', function(req, res, next) { //http://localhost:3000/movies

  //find all users
  Movie.find()
  .then(allMovies =>{
    console.log(allMovies)
    res.render("movies",{allMovies:allMovies});
    // res.send('respond with a all resource');  // display message on browser
  });
});

router.get('/:_id', function(req, res, next) { //http://localhost:3000/movies/_id

  const _id = req.params._id;
  console.log("id is..",_id);
  //console.log("name",name);
  //find all users
  Movie.find({_id:_id}) //idでmongo内のレコードを検索
  .then(movie =>{
    console.log("movie",movie);
    res.render("movieinfo",{movie:movie}); // render 'movieinfo' hbs file with the movie object
  })
  .catch(err => {
    console.error('Error passing', err);
  });
});

module.exports = router;
