const express = require('express');
const router  = express.Router();
const Movies = require("../models/movies");
const Director = require("../models/directors");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: './public/uploads/' });

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movies.find()
  // .populate("director")
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
  .populate("director")
  .then((movie) => {
    // console.log(movie)
    res.render("eachmovie", {movie})
  })
  .catch((error) => {
    console.log(`Oops, you  got an error, ${error}`)
  })
})

router.get("/movie/delete", (req,res)=> {
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
  Director.find({})
  .then((directors)=>{
    res.render("createnew", {directors});
  })
})

router.post("/addmovie", upload.single('url'), (req,res,next) => {
  var newMovie = new Movies({
    title: req.body.title,
    director: mongoose.Types.ObjectId(req.body.directorId),
    image: req.file.filename,
    description: req.body.description,
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
  let updateMovie;
  Movies.findById(req.params.id)
  // .populate("director")
  .then((movie)=>{
    updateMovie = movie;
    return Director.find({})
    // res.render("updatemovie", {movie});
  })
  .then((directors)=>{
    debugger
    res.render("updatemovie", {directors: directors, movie: updateMovie});
  })
  .catch((error)=>{
    console.log(`Oops, you  got an error, ${error}`)
  })
})

router.post("/movie/update/:id", upload.single('image'), (req,res,next)=>{
  console.log(req.file.filename);
   var userInput = {
    title: req.body.title,
    director: req.body.directorId,
    description: req.body.description,
    image: req.file.filename,
    stars: [req.body.starone, req.body.startwo, req.body.starthree]
  }
  Movies.findByIdAndUpdate(req.params.id, {$set: userInput})
  .then(()=>{
    res.redirect("/movies")
  })
  .catch((error)=>{
    console.log(`Oops, you  got an error, ${error}`)
  })
})

module.exports = router;