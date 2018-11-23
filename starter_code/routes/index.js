const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  /*Movie.find()
       .then(movies => {
         res.render("index", {movies})
       }).catch(err => {
         res.render("index")
       })*/
       res.render('index')
});



router.get("/movies", (req, res) => {
  Movie.find()
       .then(movie => {
         console.log(movie)
         res.render("movies", {movie})
       }).catch(e => {
         res.render("index")
       })
})

router.get("/movies/:id", (req, res) => {
  const {id} = req.params
  Movie.findById(id)
       .then(movie => {
         console.log(movie)
         res.render("detail", movie)
       }).catch(e => {
         res.render("index")
       })
})


module.exports = router;
