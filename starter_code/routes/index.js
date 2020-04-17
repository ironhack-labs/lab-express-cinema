const express = require('express')
const router = express.Router()
const Movie = require('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  console.log(movies)
  res.render('movies', { movies })
})

// router.get('/movie/:id', async (req, res, next) => {
//   const [movie] = await Movie.find({ _id: req.params.id });
//   console.log(movie);
//   res.render('movie', { movie, title: 'test' });
// });

module.exports = router

// router.get('/country/:id', async (req, res) => {
//   const { id } = req.params
//   // hagan un query para traer el documento que coincida con ese id
//   const country = await Country.findById(id)
//   const quarantine = await Quarantine.findById(country.quarantine)
//   res.render('detail', { country, quarantine })
// })

// router.get('/', async (req, res) => {
//   const countries = await Country.find({}).sort({ name: 1 })
//   res.render('index', { countries })
// })

// exports.indexGet = async (req, res) => {
//   const countries = await Country.find({}).sort({ name: 1 })
//   res.render('index', { countries })
// }

// exports.detailGet = async (req, res) => {
//   const { id } = req.params
//   // hagan un query para traer el documento que coincida con ese id
//   const country = await Country.findById(id)
//   const quarantine = await Quarantine.findById(country.quarantine)
//   res.render('detail', { country, quarantine })
// }
