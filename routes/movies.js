const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

//http:localhost:3000/movies/allMovies
router.get('/movies', (req, res, next) => {
    console.log("bouba")
    MovieModel.find()
    .then(movit => { 
    res.render('movies.hbs',{list : movit});
})
    .catch(error=>console.log(error))
});



//my path for movies is here, but not working?????

// router.get("/movies", (req,res, next) =>{
//     res.render("movies")
// } this creates the movie page, but that is not what i want 


module.exports = router;