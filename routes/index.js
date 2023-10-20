const { response } = require('express');
const express = require('express');
const router = express.Router();

const Movie = require('./models/Movie')

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
    .then(moviesData => {
      res.render('movies', { movies: moviesData });
    })
    .catch(error => {
        res.status(500).send('Error database', error);
      });
  }); 

 router.listen(3000, () => {
    console.log('Server is running');
  });

 router.get('/movie/:id', (req, res) => {
    const movieId = parseInt(req.params.id);
    Movie.FindById(movieId)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
});
  
module.exports = router;
