const express = require('express');
const router = express.Router();
const movieSchema = require('./../models/Movies.model.js');

/* GET movies page */

router.get("/", async (req, res, next) => {
    try {
      const labels = await movieSchema.find();
      // if succes, send the found array as a view parameter
      res.render("label", { movies }); // we are ready now to loop through each label and display @view
    } catch (err) {
      // else if error thrown by LabelModel, pass the error to the next function
      // next() is provided by express
      // the next will display the error on error.hbs view
      next(err);
    }
  });

  /* GET movie details page */

router.get('/:movieId', (req, res) => { 
    const { movieId } = req.params;
    res.render('movie-details.hbs');

    Movies.findOne(movieId)
    .then(theMovie => res.render('movie-details', theMovie))
    .catch(error => console.log('Error while retrieving movie details: ', error));
});

  module.exports = router;
