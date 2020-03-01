const express = require('express');
const Movies = require('../models/Movie')

const filemovies = require('../bin/seeds.js')
const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
  //  Movies.insertMany(filemovies)
  res.render('index');
});
router.get('/movies', (req, res) => {
  Movies.find({}, (err, data) => {
    res.render('movies', { data })
  });
});
router.get('/movies/info/:id', (req, res) => {

  let dataid = req.params.id;

  Movies.find({ _id: dataid }, (err, data) => {
    res.render('movie', { data })
  });
});
router.get('/movies/add/', (req, res) => {


  res.render('add')

});

router.post('/movies/add/', (req, res) => {


  let dataadd = req.body;

  Movies.insertMany({ title: dataadd.title, director: dataadd.director, description: dataadd.description, image: dataadd.image, stars: [dataadd.stars0, dataadd.stars1, dataadd.stars2], showtimes: [dataadd.time0, dataadd.time1, dataadd.time2, dataadd.time3, dataadd.time4] }, (err, data) => {
    res.redirect('/movies')
  });

});

router.post('/movies/update/', (req, res) => {


  let dataadd = req.body;

  Movies.updateMany({ title: dataadd.title, director: dataadd.director, description: dataadd.description, image: dataadd.image, stars: [dataadd.stars0, dataadd.stars1, dataadd.stars2], showtimes: [dataadd.time0, dataadd.time1, dataadd.time2, dataadd.time3, dataadd.time4] }, (err, data) => {
    res.redirect('/movies')
  });

});

router.post('/movies/edit/', (req, res) => {

  let dataedit = req.body;


  Movies.find({ _id: dataedit.id }, (err, data) => {
    res.render('edit', { data })
  });
});
router.post('/movies/delete/:id', (req, res) => {

  let dataremove = req.params.id;


  Movies.findByIdAndRemove({ _id: dataremove }, (err, data) => {
    res.redirect('/movies')
  });
});
module.exports = router;
