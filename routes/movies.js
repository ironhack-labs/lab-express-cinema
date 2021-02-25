const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model');
/* GET home page */
router.get('/', (req, res, next) => {
    MovieModel.find()
        .then(moviesDB => {
            res.render("movies.hbs", 
            {
                title: "All the films",
                films: {moviesDB}
            })
        })
    
});

router.get("/:id", (req, res, next) => {
    MovieModel.findById(req.params.id)
      .then((movie) => {
        res.render("filmDetails.hbs", { movie });

      })
      .catch((error) => {
        console.log(error);
      });
  });

module.exports = router;
