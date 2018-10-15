const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


/* GET home page. */

router.get('/', (req, res) => {
  Movie.find()
  .then((movies) => {
    res.render('movies', { tabtitle: 'Movies' , "movies": movies});
    })
  .catch((error) => {
    console.log(error);
    })
  });


/* Create movie */

router.get('/new', (req, res)=> {
  res.render('movies/add', {"tabtitle": "Add movie"});
})


router.post('/', (req, res) => {
  const movie = req.body;
  Movie.create(movie)
  .then ( () => {
    res.redirect("/movies");
  })
  .catch(error => {
    console.log(error)
  })
});

//Edit Movie

router.get('/:id/edit', (req,res) => {
  const id = req.params.id;

  Movie.findById(id)
  .then((movie) => {
    res.render("movies/edit", {"tabtitle": movie.title, "movie": movie})
  })
});

router.post('/:id/', (req, res)=> {
  const id = req.params.id;
  const movie = req.body;
  Movie.findByIdAndUpdate(id, movie)
  .then(() => {
    res.redirect("/movies");
  })
  .catch(error => {
    console.log(error)
  })
});

  // Delete movie 

  router.post('/:id/delete', (req, res) => {
    const id = req.params.id;
    Movie.findByIdAndDelete(id)
    .then(() => {
      res.redirect('/movies');

    })
    .catch(error => {
      console.log(error);
    })
  });

  // Get movie info

  router.get('/:id', function(req, res) {
    const id = req.params.id;
    Movie.findById(id)
    .then(movie => {
      res.render("moviedetail", {"tabtitle": movie.title, "movie": movie})
    })
    .catch( error => {
      console.error(`Error reading movie with ${id}!`, error)
    })
  });


module.exports = router;
