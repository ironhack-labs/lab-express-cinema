const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res) => {
    const id = req.query.id;
    Movies.findById(id)
    .then((movie)=>{res.render('edit', {movie});
    })
});

router.post('/', (req, res) => {
    const { title, director, stars, image, description, showtimes } = req.body;
    Movies.update({_id: req.query.id}, {$set: { title, director, stars, image, description, showtimes }})
    .then((edit) => {
        res.redirect('/movie?id='+ req.query.id);
      })
      .catch((error) => {
        console.log(error);
      })
    });
module.exports = router;