const express = require('express');
const router  = express.Router();
const Movie = require(`../models/Movie`);

/* GET home page */
router.get('/', (req, res, next) => {
  const
    data = {
      title: `Home | Cinema Ironhack`,
      style: `index.css`
    }
  ;
  res.render('index', {data});
});

router.get(`/movies`, (req, res) => {
  const
    data = {
      title: `Movies | Cinema Ironhack`,
      style: `movies.css`
    }
  ;
  Movie
    .find()
    .then( movies => res.render(`movies`, {data, movies}) )
  ;
})

router.get(`/movies/:id`, (req, res) => {
  const
    data = {
      title: null,
      style: `details.css`
    }
  ;
  Movie
    .findById(req.params.id)
    .then( movie => {
      data.title = `${movie.title} | Cinema Ironhack`;
      res.render(`movieDetail`, {data, movie})
    })
  ;
})

module.exports = router;