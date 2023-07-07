const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */

router.get('/movies', (req, res) => {
    // Obtener la lista de películas de la base de datos
    Movie.find()
      .then((movies) => {
        res.render('movies', { movies });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  });

    /* GET movies details */

    router.get('/movies/:id', (req, res) => {
      const id = req.params.id;
      Movie.findById(id)
        .then((movie) => {
          res.render('movie-details', { movie });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Internal Server Error');
        });
    });

module.exports = router;
