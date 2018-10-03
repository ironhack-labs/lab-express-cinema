const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movie'); //Llamar al modelo

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req,res)=>{
  Movies.find()
  .then( movies => {
    res.render('movies', {header: "Movies", movies})
  })
  .catch(error =>{
    console.log('======>',error)
  })
});

// Ruta 
router.get('/movies/:id', (req, res)=>{
  Movies.findById(req.params.id)
  .then(movie => {
    res.render("movieDetail", { header: movie.title, movie})
  })
})


module.exports = router;
