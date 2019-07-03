const express = require("express")
const mongoose = require("mongoose")
const Movie = require('../models/Movie')



const router = express.Router()

router.get('/', (req, res, next) =>{
  Movie.find({}, {
    title: 1,
    image: 1
  })
  .then(resul =>{
    res.json(resul);
  })
})

router.get('/:id', (req, res, next) => {
  console.log(req.params)
  Movie.findById({
    _id: req.params.id
  }).then(resltado =>{
    res.json(resltado)
  })
})

module.exports = router;





















// const express = require("express")
// const mongoose = require("mongoose")
// const Movie = require('../models/Movie')



// const router = express.Router()

// // router.get('/', (req, res, next) =>{
// //   Movie.find({}, {
// //     title: 1,
// //     image: 1
// //   })
// //   .then(resul =>{
// //     res.json(resul);
// //   })
// // })


// router.get("/", (req, res, next) => {
//   Movie.find({},'title image')
//   .then(data => {
//     res.status(200).json({
//       texto: "error",
//       data: "data"
//     });
//   });
// });



// router.get('/:id', (req, res, next) => {
//   console.log(req.params)
//   Movie.findById(req, params.id)
//     .then(theMovie => {
//       res.status(200).json(themovie)
//     }).catch(err => {
//       res.status(500)
//     })



//   {
//     _id: req.params.id
//   }).then(resltado =>{
//     res.json(resltado)
//   })
// })

// module.exports = router;