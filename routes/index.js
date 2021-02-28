const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model");
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    
    MovieModel.find()
      .then((dbRes) => {
        // console.log(dbRes);
        res.render("movies", { movies: dbRes });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  router.get("/one-movie/:id", (req, res, next) => {
  
    MovieModel.findById(req.params.id)
      .then((movie) => {
        
        res.render("one-movie", { movie });
      })
      .catch((dbError) => {
        next(dbError);
      });
  });

module.exports = router;
