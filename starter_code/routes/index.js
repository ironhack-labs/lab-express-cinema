const express = require('express');
const router = express.Router();
const moviesModel = require('../models/Movies'); // besoin de creer cette variable pour faire appel à notre base de données


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  moviesModel
    .find() // aucun parametre pour selectionner donc all par default
    .then(dbRes => {
      res.render('moviesView', {
        moviesDisplay: dbRes // fais le lien avec movies utilisé dans moviesView.hbs
      });
    })
    .catch(error => {
      console.log("error while retrieving movies View", error);
    });
});

router.get('/movies/:id', (req, res) => {
  moviesModel
    .findOne({ // on aurait pu utiliser findById aussi
      "_id": req.params.id
    }) // id est une propriété de params qui est une propriété de la request
    .then(theMovie => {
      res.render('movieDetails', {
        movieDisplayDetails: theMovie
      });
    })
    .catch(error => {
      console.log("error while retrieving moviE details", error);
    });
});


module.exports = router;