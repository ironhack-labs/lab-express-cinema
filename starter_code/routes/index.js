const express = require('express');
const router  = express.Router();
const Movies = require(`../models/movies`)

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/movies', (req, res, next) => {
  Movies.find()
  .then(allMovies=> {
  res.render(`movies`,{allMovies})
  // res.json({allMovies})
});
});

router.get('/see-more/:id', (req, res, next) => {
  let {id} = req.params;
Movies.findById(id)
.then(film=> {
  res.render('see-more', {film});
  // res.json({film})
});
});


module.exports = router;
