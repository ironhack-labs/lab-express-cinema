const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



// --- iteration 3 ---
router.get('/gallery/index', (req, res, next) => {
  console.log('Requesting database...')
  Movie

    .find({})

    .then((dbResult) => {
      console.log(dbResult)
      res.render('gallery/index', {
        movlist: dbResult,
      })
    })

    .catch((err) => {
      console.log(err)
    })
})

//  --- iteration 4 ---
router.get('/gallery/:id', (req, res, next) => {
  console.log('Requesting id')
  Movie

    .findById(req, params, id)

    .then((dbmovie) => {
      console.log(dbmovie)
      // console.log(dbmovie);
      res.render('/gallery/seeMore', {
        details: dbmovie
      })
    })

    .chatch((dberr) => {
      console.log(dberr)
    })
})

module.exports = router;