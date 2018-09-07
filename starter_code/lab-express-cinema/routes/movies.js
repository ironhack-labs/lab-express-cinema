const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')


/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((data) =>{
    console.log(data)
    res.render('movies', {data: data});
  })
  .catch((err)=>{
    console.log(err)
  })
});

router.get('/movies/:id', (req, res, next) =>{
  console.log(req.params.id)
  var id = req.params.id
  Movie.findById(id)
  .then((data)=> {
    console.log(data)
    res.render("movies-id", {onemovie: data })
  })
  .catch((err)=>{
    console.log(err)
  })
})

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const Movie = require('../models/movie')

/*GET home page */
//
// router.get('/movies', (req, res, next)=>
// {
//   Movie.find()
//   .then((ret) => {
//     console.log(ret)
//     res.render('movies', {listOfMovies: ret})
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// })
//
//
// module.exports = router;
