const express = require("express");
const router = express.Router();

const MovieModel =require("./../../lab-express-cinema/models/MovieModel");

router.get('/', (req,res,next) =>{
  
  MovieModel.find()
  .then((moviesList) => {
    
    res.render("movies", { movie: moviesList });
    res.render("movies", { movie: moviesList });
  })
  .catch((error) => {
  
    next(error);
  });
});


router.get("/:id", (req, res, next) => {
  // console.log(req.params); // an object representing all dynamic path segments
  // :id is now a variable accessible through req.params.id
  
  MovieModel.findById(req.params.id)
    .then((movieDB) => {
      res.render("movie", {
        eachMovie: movieDB,
      });
    })
    .catch((dbError) => {
      next(dbError);
    });
});


module.exports = router;