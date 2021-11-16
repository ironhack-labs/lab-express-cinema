const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



const Movie = require('../models/movie.model')

//Movies route

router.get("/movies" , async (req, res)=>{
    try{
        const moviesFromDB = await Movie.find()
        res.render("movies.hbs", {moviesFromDB})
    }catch(err) {
        console.log("error")
}
})

// router.get("/movie/:id", async (req, res) => {
//     try{
//         const movieId = await Movie.findById(req.params.id)
//         res.render("movie-details.hbs", movieId)
//         console.log(movieId)
//     }catch(err) {
//         console.log("error")
//     }
// });

router.get("/movies/:id", async (req, res) => {
    try{
        const movieId = await Movie.findById(req.params.id)
        res.render("movie-details.hbs", movieId)
    }catch(err) {
        console.log("error")
}
  });

module.exports = router;
