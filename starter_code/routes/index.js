const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose");
const Movies = require("../models/Movie")




/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  Movies.find()
  .then((dbResult) => {
    res.render("movies.hbs", {
      movieid: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs", {
      message: err.message,
    })
  })
});
//find then catch

router.get("/movies/:id", (req, res, next) => {
  Movies.findById((req.params.id))
  .then((dbResult) => {
    res.render("movies-info.hbs", {
      movieid: dbResult,
    });
  })
  .catch((err) => {
    res.render("error.hbs", {
      message: err.message,
    })
  })
});

module.exports = router;



// router.get("/", (request, res) => {
//   Restaurant.find({})
//     .then((dbResult) => {
//       res.render("index.hbs", {
//         movieresult: dbResult,
//       });
//     })
//     .catch((err) => console.log(err));
//   //   res.render("index.hbs");
// });