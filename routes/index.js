const express = require('express');
const router = express.Router();
const Movie = require("../models/MovieModel.js");

hbs.registerPartials(`${__dirname}/views/partials`)

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get("/movies", async(req, res)=>{
  const movies=await Movie.find();
  console.log(movies)
  res.render("movies", {movies})
}) 

// router.get(`/movies`, (req, res) => {
// Movie.find()
// .then(mov =>{
//     console.log(`obteniendo libros`, mov)
//     res.render(`movies`, {mov})
// })
// .catch(err => {
//     console.log (`error `, err)
// })

// })

/* router.get("/movies/:_id", async(req, res)=>{
    const {movId}=req.params._id
    const movie = await Movie.findById(movId);
  res.render("moviedetails", {movies})
})  */

 router.get(`/movies/:_id`,(req, res) =>{
     const movId = req.params._id;
     Movie.findById(movId)
     .then(movie =>{
         res.render(`movie-details`,movie)
     })
     .catch(error => {
         console.log("Error",error)
     })
 })



module.exports = router;

