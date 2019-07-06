const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((moviesFromBD) => {
      console.log(moviesFromBD)


      res.render('movies', {
        allMovies:
          moviesFromBD
      })
    })
    .catch((err) => {
      next(err);
    })
})
router.get('/movies/:id', (req, res, next) => {
  
  Movie.findById(req.params.id)
    .then((moviesFromBD) => {
      console.log(moviesFromBD)


      res.render('singleMovie', moviesFromBD)
    })
    .catch((err) => {
      next(err);
    })
});
// router.get('/movies', (req, res, next) => {
//   Movie.find()
//     .then((moviesFromBD) => {
//       console.log(moviesFromBD)


//       res.render('movies', {
//         allMovies:
//           moviesFromBD
//       })
//     })
//     .catch((err) => {
//       next(err);
//     })
// })

module.exports = router;
