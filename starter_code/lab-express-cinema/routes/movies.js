const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(mvs => { res.render("movies", { mvs }) })
    .catch(e => next(e))

})

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Movie.findById(id)
    .then(mov => {
      console.log(mov)
      res.render('movie', mov)
    }).catch(e => {
      console.log(e)
      next(e)
    })
})
// router.get('/', (req, res, next) => {
//   const { search } = req.query
//   if (search) {
//     Movie.find({ title: { $regex: search, $options: 'i' } })
//       .then(movies => {
//         res.render('books-list', { movies })
//       }).catch(e => next(e))
//   } else {
//     Movie.find()
//       .then(movies => {
//         res.render('books-list', { movies })
//       })
//   }
// })


module.exports = router