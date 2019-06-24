const express = require('express');
const router = express.Router();
const movies = require('../models/Movies.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {


  movies.find({}).then((dbRes) => {

    console.log("All movies are on line");
    console.log(dbRes);
    res.render('movies', { dbRes });

  });
});





router.get('/movies/:id', (req, res) => {

  identifier = req.params.id;
  movies.findById(identifier).then(dbRes => {
    console.log(dbRes);
    res.render('moviesdetail', { dbRes });
  })

});






module.exports = router;
