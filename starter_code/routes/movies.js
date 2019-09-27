const express = require('express');
const router  = express.Router();
const Movies = require("../models/movies");

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movies.find()
  .then((movies)=>{
    // console.log(movies)
    res.render('movies', {movies});
  })
  .catch((error)=>{
    console.log(`Oops, you  got an error, ${error}`);
  })
});

//req.params method

// router.get('/movies/:id', (req, res, next) => {
//   Movies.findById(req.params.id)
//   .then((movie) => {
//     console.log(movie)
//     res.render("eachmovie", {movie})
//   })
//   .catch((error) => {
//     console.log(`Oops, you  got an error, ${error}`)
//   })
// })


//req.query method
router.get('/movie/detail', (req, res, next) => {
  Movies.findById(req.query.movieId)
  .then((movie) => {
    // console.log(movie)
    res.render("eachmovie", {movie})
  })
  .catch((error) => {
    console.log(`Oops, you  got an error, ${error}`)
  })
})

router.get("/movie/delete", (req,res)=> {
  debugger
  Movies.findOneAndRemove({_id: req.query.movieId})
  .then(()=>{
    console.log("deleted");
    res.redirect("/movies");
  })
  .catch((error) => {
    console.log(`Oops, you  got an error, ${error}`)
  })
})

router.get("/addmovie", (req, res, next) => {
  res.render("createnew");
})

router.post("/addmovie", (req,res,next) => {
  var newMovie = new Movies({
    title: req.body.title,
    director: req.body.director,
    image: req.body.url,
    stars: [req.body.starone, req.body.startwo, req.body.starthree]
  })

  newMovie.save()
  .then(()=>{
    console.log("saved!");
    res.redirect("/movies");
  })
  .catch((error)=>{
    console.log(`Oops, you  got an error, ${error}`)
  })
})

router.get("/movie/update/:id", (req,res,next)=>{
  Movies.findById(req.params.id)
  .then((movie)=>{
    res.render("updatemovie", {movie});
  }).
  catch((error)=>{
    console.log(`Oops, you  got an error, ${error}`)
  })
})

router.post("/movie/update/:id", (req,res,next)=>{
  let stars = [req.body.starone, req.body.startwo, req.body.starthree]
  req.body.stars = stars;
  Movies.findByIdAndUpdate(req.params.id, {$set: req.body})
  .then(()=>{
    console.log(req.body.starone);
    res.redirect("/movies")
  })
  .catch((error)=>{
    console.log(`Oops, you  got an error, ${error}`)
  })
})

module.exports = router;