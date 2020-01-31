const express = require('express');
const router  = express.Router();
const Movies = require("./../models/movie")


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movies.find()
    .then(info => res.render("movies", {info}))
    // .then(info => res.send(info))
    .catch(err => console.error("no funciona",err))
})

//aqui esta el 'movie' archivo hbs
router.get('/movie/:ide', (req,res) =>{
  const {ide} = req.params
  Movies.find({_id: ide})
  .then(info => {res.render('movie', {info})})
  // .then(info => res.send(info))
  .catch(err => console.error(err))
})



module.exports = router;
