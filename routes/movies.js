const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies.model.js');

router.get('/', (req, res) =>{
    Movies.find()
    .then(movies => {
        res.render('movies', { movies })
    })
})

router.get('/form', (req, res) => {
    res.render('new-movie');
  });

router.post('/form', (req, res) => {
    // BODY ou CORPO DA REQUISICAO!!
     const { title, director, imageUrl, description } = req.body;
   
     const newMovie = {
        title: title,
        director: director,
        image: imageUrl,
        description: description,
     }
   
     Movies.create(newMovie)
       .then(() => {
         res.redirect('/movies');
       })
       .catch(error => console.log(error));
   
   });

module.exports = router;