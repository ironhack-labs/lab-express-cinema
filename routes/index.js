const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// GET THE MOVIES PAGE (Iteration 3)

const MovieModel = require("./../models/Movie.model");

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await MovieModel.find();
    res.render("movies", { allMovies });

  } catch(err) {
    next(err);
  }
  
});

// GET ONE MOVIE (Iteration 4)

router.get("/movie/:id", async (req, res, next) => {
    try {
      const movinfo = await MovieModel.findById(req.params.id);
      res.render("movie", movinfo);
  
    } catch(err) {
      next(err);
    }
    
  });

// router.get("/detailsMovie/:id", async (req, res) => {
//   try {
      
//     const movie = await MovieModel.findById(req.params.id);
//     res.render("detailsMovie", {movie});
    
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
