const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(error => {
      console.error('Error al conectar a la base de datos:', error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
