const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model"); 

/* GET home page */
router.get('/', async (req, res, next) => { 
  try {
    const movies = await Movie.find(); // Fetch all movies from MongoDB
    res.render("index", { 
      title: "Cinema Ironhack", // Passing "Cinema Ironhack" as the value for title
      movies: movies // Pass movies data to the template
    }); 
  } catch (error) {
    console.error("Error fetching movies:", error);
    next(error);
  }
});

// Route to list all movies
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies }); 
    })
    .catch(err => {
      next(err);
    });
});

// Route to show individual movie details
router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).render("not-found"); 
      }
      res.render("movieDetails", { movie }); 
    })
    .catch((error) => {
      console.error("Error retrieving movie details:", error);
      next(error);
    });
});

module.exports = router;
